const fs = require('fs');

const MODEL = "gemini-3.6-flash";

async function generateReplacements() {
  const longDescs = JSON.parse(fs.readFileSync('long_descs.json', 'utf8'));
  let replacements = [];
  if (fs.existsSync('replacements.json')) {
    replacements = JSON.parse(fs.readFileSync('replacements.json', 'utf8'));
  }

  const batchSize = 10;
  for (let i = replacements.length; i < longDescs.length; i += batchSize) {
    const batch = longDescs.slice(i, i + batchSize);
    console.log(`Processing batch ${Math.floor(i / batchSize) + 1} of ${Math.ceil(longDescs.length / batchSize)}`);

    const prompt = `You are an expert SEO copywriter. I will give you a JSON array of long meta descriptions (over 155 characters). 
Your task is to rewrite each description to be strictly between 140 and 155 characters.
Rules:
- Preserve original meaning, search intent, primary keyword, and important information.
- DO NOT just cut text from the end. Rewrite naturally so each description is complete and professional.
- Output MUST be a valid JSON array of strings in the exact same order as the input array.
- ONLY output the JSON array, no markdown formatting or extra text.

Input JSON:
${JSON.stringify(batch.map(item => item.desc), null, 2)}
`;

    let success = false;
    while (!success) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 60000);
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: {
              temperature: 0.1
            }
          }),
          signal: controller.signal
        });
        clearTimeout(timeout);

        if (!response.ok) {
          const respText = await response.text();
          if (response.status === 429) {
            console.log("Rate limit hit, waiting 60 seconds...");
            await new Promise(r => setTimeout(r, 60000));
            continue;
          }
          console.error("API error:", response.status, respText);
          await new Promise(r => setTimeout(r, 5000));
          continue;
        }

        const data = await response.json();
        let outputText = data.candidates[0].content.parts[0].text;

        outputText = outputText.replace(/^```json\s*/, '').replace(/```\s*$/, '').trim();

        let newDescs;
        try {
          newDescs = JSON.parse(outputText);
        } catch (e) {
          console.error("Failed to parse JSON, retrying in 5 seconds...");
          await new Promise(r => setTimeout(r, 5000));
          continue;
        }

        if (newDescs.length !== batch.length) {
          console.error("Mismatch in lengths", batch.length, newDescs.length);
          await new Promise(r => setTimeout(r, 5000));
          continue;
        }

        for (let j = 0; j < batch.length; j++) {
          replacements.push({
            file: batch[j].file,
            oldDesc: batch[j].desc,
            newDesc: newDescs[j],
            quote: batch[j].quote
          });
        }

        fs.writeFileSync('replacements.json', JSON.stringify(replacements, null, 2));
        console.log(`Saved batch ${Math.floor(i / batchSize) + 1}`);
        success = true;

      } catch (err) {
        console.error("Error in batch", err.message);
        await new Promise(r => setTimeout(r, 5000));
      }
    }

    // Add small delay between successful batches
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log("Finished generating replacements.");
}

generateReplacements();
