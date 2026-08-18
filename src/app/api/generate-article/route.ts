import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const maxDuration = 300; // Maximum duration for serverless operations

const sanitizeText = (txt: string) =>
  txt
    .replace(/—/g, "-")
    .replace(/\u2014/g, "-")
    .replace(/\u2013/g, "-");

const cleanHtmlFences = (html: string) => {
  let cleaned = html.trim();
  if (cleaned.startsWith("```html")) {
    cleaned = cleaned.slice(7).trim();
  } else if (cleaned.startsWith("```")) {
    cleaned = cleaned.slice(3).trim();
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.slice(0, -3).trim();
  }
  return cleaned;
};

export async function POST(request: NextRequest) {
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  const openai = new OpenAI({
    apiKey: apiKey,
  });

  try {
    const body = await request.json();
    const contextText =
      body.primaryKeyword ||
      body.context ||
      body.writeup ||
      body.topic ||
      body.title;
    const secondaryKeywords = body.secondaryKeyword || body.secondaryKeywords || "";

    if (!contextText) {
      return NextResponse.json(
        { error: "Topic, Context, or Writeup is required" },
        { status: 400 }
      );
    }

    console.log(
      `[AI Blog Generator] Step 1: Deep Topic Analysis via OpenAI Structured Outputs for: "${contextText.substring(
        0,
        50
      )}..."`
    );

    // ==========================================
    // STEP 1: Deep Topic Analysis & Structured Outline
    // ==========================================
    const step1SystemPrompt = `You are the Chief IP Counsel, Lead Trademark Attorney, and Chief SEO/AEO Strategist for IPR Karo (https://www.iprkaro.com/), India's premier Intellectual Property legal-tech platform.

Analyze the given user topic/writeup and generate a structured legal article blueprint.

TAXONOMY CATEGORIES (Select the most appropriate one):
1. "Procedural IP & Office Actions": Examination Reports, Section 9 (Absolute Grounds) & Section 11 (Relative Grounds) Objections, Formalities Check Fail, TM-O Opposition & Counter-Statements, Trademark Hearings before Registrar, Section 57 Rectifications, Renewals & Restorations.
2. "Industry & Class Guides": Nice Classification system (Classes 1-45), Trademarks for SaaS/Tech (Class 9/42), D2C/Clothing (Class 25), Pharma (Class 5), Food/Cloud Kitchens (Class 29/30/43), Financial Services (Class 36), Education (Class 41).
3. "Litigation, Infringement & Brand Enforcement": Cease & Desist Legal Notices, Section 135 Commercial Injunctions, Passing Off vs Registered Infringement, Madrid Protocol International Filings, Copyright Infringement, Patent Protection.

CRITICAL GUIDELINES:
- Title (H1): Highly clickable, authoritative, concise (under 70 chars).
- Subtitle: Engaging, informative summary of key legal insights (max 140 chars).
- Meta Title: Exactly 55-68 characters, strictly ending with " | IPR Karo".
- Meta Description: 140-160 characters, high-converting CTR summary with actionable benefit.
- Slug: Clean, keyword-rich kebab-case URL slug (no special characters).
- Statutory Framework: Explicitly cite Indian statutes (e.g. "Trade Marks Act, 1999 & Trade Marks Rules, 2017" or "Copyright Act, 1957" or "Patents Act, 1970").
- Outline: Exactly 5 comprehensive, progressive H2 section headings (targeting 350-380 words per section for an overall article length of 1,800 to 2,000 words).
- Key Takeaways: Exactly 5 actionable, punchy bullet points summarizing critical legal rights, deadlines, fees, or procedural remedies.
- Popular Searches: 10 high-intent Indian legal search terms.

STRICT NEGATIVE CONSTRAINT:
Under no circumstances use em dashes (—). Always use standard hyphens (-), colons (:), commas, or parentheses instead.`;

    const step1Response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: step1SystemPrompt },
        {
          role: "user",
          content: `Topic / Writeup: ${contextText}\nSecondary Keywords / Notes: ${secondaryKeywords}`,
        },
      ],
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "iprkaro_article_analysis",
          strict: true,
          schema: {
            type: "object",
            properties: {
              title: { type: "string", description: "H1 Title (under 70 chars)" },
              subtitle: { type: "string", description: "Engaging subtitle (under 140 chars)" },
              metaTitle: { type: "string", description: "Meta title ending with ' | IPR Karo'" },
              metaDescription: { type: "string", description: "Meta description (140-160 chars)" },
              slug: { type: "string", description: "Kebab-case URL slug" },
              exactTopic: { type: "string", description: "Precise legal topic title" },
              category: {
                type: "string",
                enum: [
                  "Procedural IP & Office Actions",
                  "Industry & Class Guides",
                  "Litigation, Infringement & Brand Enforcement",
                ],
              },
              statutoryFramework: { type: "string", description: "Governing Indian statutory laws" },
              outline: {
                type: "array",
                items: { type: "string" },
                description: "Array of exactly 5 H2 headings",
              },
              keyTakeaways: {
                type: "array",
                items: { type: "string" },
                description: "Array of exactly 5 actionable bullet points",
              },
              popularSearches: {
                type: "array",
                items: { type: "string" },
                description: "Array of 10 high-intent IP search terms",
              },
            },
            required: [
              "title",
              "subtitle",
              "metaTitle",
              "metaDescription",
              "slug",
              "exactTopic",
              "category",
              "statutoryFramework",
              "outline",
              "keyTakeaways",
              "popularSearches",
            ],
            additionalProperties: false,
          },
        },
      },
      temperature: 0.7,
      max_tokens: 2500,
    });

    const analysisRaw = step1Response.choices[0]?.message?.content || "{}";
    const analysis = JSON.parse(sanitizeText(analysisRaw));

    console.log(
      `[AI Blog Generator] Step 1 Complete. Title: "${analysis.title}", Outline Sections: ${analysis.outline.length}`
    );

    // ==========================================
    // STEP 2 & 3: Parallel Concurrent Chunking & Generation via Promise.all
    // ==========================================
    console.log(
      `[AI Blog Generator] Step 2 & 3: Launching ${analysis.outline.length} parallel section chunkers + FAQs & visual prompt synthesis...`
    );

    const outlineHeadings: string[] = analysis.outline;
    const totalSections = outlineHeadings.length;

    // Helper to generate a single H2 section chunk
    const generateSectionChunk = async (heading: string, index: number) => {
      const isFirstSection = index === 0;
      const isComparisonOrMiddleSection = index === 1 || index === 2;
      const isFinalSection = index === totalSections - 1;

      const chunkSystemPrompt = `You are a Senior Trademark Attorney and Legal Writer at IPR Karo (https://www.iprkaro.com/).
Write Section ${index + 1} of an exhaustive legal guide for Indian founders, enterprises, and legal practitioners.

Article Context:
- Main Title: ${analysis.title}
- Subtitle: ${analysis.subtitle}
- Category: ${analysis.category}
- Statutory Framework: ${analysis.statutoryFramework}
- Current Section H2: "${heading}"
- Full Article Outline: ${JSON.stringify(outlineHeadings)}

SECTION CONTENT REQUIREMENTS:
1. Target Word Count: Strictly 350 to 380 words for this section chunk. (The overall compiled article across all sections MUST strictly total between 1,800 and 2,000 words). Be razor-sharp, dense, practical, and eliminate unnecessary preamble or fluff.
2. Structure:
   - Start immediately with the section heading: <h2>${heading}</h2>
   - Provide 3 to 4 comprehensive paragraphs using <strong>, <em>, <ul>, <ol>, <li> for high readability.
   - Reference exact statutory provisions (e.g. Sections 9, 11, 21, 23, 29, 30, 57, 134, 135 of Trade Marks Act 1999; TM Rules 2017; Forms TM-A, TM-O, TM-M, TM-R; CGPDTM Registry guidelines; official fees ₹4,500 for individuals/startups vs ₹9,000 for companies).
${
  isComparisonOrMiddleSection
    ? `3. MANDATORY TABLE INJECTION:
   - You MUST include a detailed, clean HTML <table> comparing parameters, procedures, or legal classifications.
   - Table structure:
     <div class="overflow-x-auto my-6">
       <table class="w-full border-collapse">
         <thead>
           <tr>
             <th>Parameter</th>
             <th>Section / Rule</th>
             <th>Statutory Requirement</th>
             <th>Legal Effect / Remedy</th>
           </tr>
         </thead>
         <tbody>
           <!-- 3 to 5 detailed rows -->
         </tbody>
       </table>
     </div>`
    : ""
}
${
  isFinalSection
    ? `4. MANDATORY OFFICIAL REFERENCES & EXTERNAL PORTALS:
   - In addition to concluding legal insights, you MUST append a dedicated subsection at the very end of this section:
     <h3>Official Sources, Statutory Portals & Legal References</h3>
     <p>For verified statutory records, official e-filings, and case status tracking, consult India's official intellectual property portals:</p>
     <ul class="official-references-list">
       <li><a href="https://ipindiaonline.gov.in/" target="_blank" rel="noopener noreferrer"><strong>Trade Marks Registry E-Filing Gateway (CGPDTM)</strong></a> - Official portal for Form TM-A filings, Examination Reports, and Trademark Journal publications.</li>
       <li><a href="https://ipindia.gov.in/" target="_blank" rel="noopener noreferrer"><strong>Intellectual Property India Official Portal</strong></a> - Comprehensive public records and Nice Classification schedules.</li>
       <li><a href="https://www.wipo.int/" target="_blank" rel="noopener noreferrer"><strong>World Intellectual Property Organization (WIPO)</strong></a> - Madrid Protocol international trademark search and treaty framework.</li>
       <li><a href="https://copyright.gov.in/" target="_blank" rel="noopener noreferrer"><strong>Copyright Office of India</strong></a> - Statutory registration and literary/artistic copyright documentation.</li>
       <li><a href="https://www.indiacode.nic.in/" target="_blank" rel="noopener noreferrer"><strong>India Code Legislative Repository</strong></a> - Full text of the Trade Marks Act, 1999 and Trade Marks Rules, 2017.</li>
       <li><a href="https://delhihighcourt.nic.in/" target="_blank" rel="noopener noreferrer"><strong>Delhi High Court (Intellectual Property Division)</strong></a> - Commercial IP disputes, rectification appeals, and infringement precedents.</li>
     </ul>`
    : ""
}

5. NATURAL INTERNAL LINKING:
   - Naturally hyperlink relevant phrases to internal IPR Karo tools and services:
     - <a href="/trademark-search">AI Trademark Public Search Tool</a>
     - <a href="/trademark-class-finder">Trademark Class Finder (Classes 1-45)</a>
     - <a href="/our-services/trademark-registration">Trademark Registration Services</a>
     - <a href="/about-us">IPR Karo Legal Advocates & Strategists</a>
     - <a href="/contact-us">Consult IP Attorney</a>

6. FORMAT & CONSTRAINTS:
   - Return ONLY raw HTML. Do NOT include markdown code fences (\`\`\`html).
   - Do NOT include <h1> or <html>/<body> tags.
   - STRICT NEGATIVE CONSTRAINT: Zero em dashes (—). Always use standard hyphens (-) or colons.`;

      const chunkCompletion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: chunkSystemPrompt },
          {
            role: "user",
            content: `Write the complete, highly detailed HTML content for Section ${index + 1}: "${heading}".`,
          },
        ],
        temperature: 0.75,
        max_tokens: 3000,
      });

      const chunkHtml = sanitizeText(
        cleanHtmlFences(chunkCompletion.choices[0]?.message?.content || "")
      );
      return chunkHtml;
    };

    // Helper to generate FAQs, Reviews, and Visual Prompts in parallel
    const generateMetaAndExtras = async () => {
      const extrasSystemPrompt = `You are a Senior IP Legal Strategist at IPR Karo.
Based on the article topic and statutory framework, generate:
1. Exactly 8 to 10 highly realistic, legally precise FAQs referencing specific sections of the Trade Marks Act 1999, TM Rules 2017, statutory fees (₹4,500 vs ₹9,000), timelines, and Registrar procedures.
2. Exactly 5 authentic client review snippets with realistic Indian founder/business names, verified 5-star ratings, realistic dates, and detailed testimonials regarding IPR Karo's trademark/IP services.
3. "suggestedImagePrompt": High-end cinematic editorial photograph for IPR Karo. Features an Indian startup founder consulting with a senior trademark advocate in a modern high-rise law office in New Delhi reviewing an official stamped Form TM-A trademark registration certificate. On the sleek boardroom wall in the background, there is an elegant brushed-metal office plaque clearly reading "IPR KARO - ADVOCATES & IP ATTORNEYS". Warm architectural lighting, sleek royal purple and lilac decor accents, crisp Leica 35mm photography, authentic, authoritative, 8k resolution.
4. "infographicPrompt": A streamlined, modern, elegant legal process infographic poster tailored to this topic ("${analysis.title}"). Keep it spacious, clean, and balanced (avoid visual clutter or overcrowded text):
   - Header: Sleek royal purple (#7C3AED) and dark charcoal header plaque with Scales of Justice & Registered Trademark seal on left, bold title "${analysis.title}" in center, and "IPR KARO - STATUTORY PROCEDURE & TIMELINE" subtitle.
   - Core Workflow: Spacious 4-step procedural roadmap with clean rounded cards, step numbers, clear icons, and statutory milestones.
   - Key Metrics: 3 bold, high-contrast metric callout badges (e.g. "30 DAYS STATUTORY WINDOW", "₹4,500 GOVT FEE", "100% ONLINE E-FILING").
   - Style: Bright clean white canvas, generous whitespace, sharp vector typography, elegant royal purple (#7C3AED) and pastel lilac (#DECFFB) palette with deep charcoal accents, STRICTLY NO GREEN, NO YELLOW/GOLD/MUSTARD, minimalist executive presentation.

STRICT NEGATIVE CONSTRAINT:
Zero em dashes (—). Always use normal hyphens (-).`;

      const extrasCompletion = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { role: "system", content: extrasSystemPrompt },
          {
            role: "user",
            content: `Article Title: ${analysis.title}\nCategory: ${analysis.category}\nStatutory Framework: ${analysis.statutoryFramework}\nHeadings: ${JSON.stringify(
              outlineHeadings
            )}`,
          },
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "iprkaro_extras_schema",
            strict: true,
            schema: {
              type: "object",
              properties: {
                faqs: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      question: { type: "string" },
                      answer: { type: "string" },
                    },
                    required: ["question", "answer"],
                    additionalProperties: false,
                  },
                },
                reviews: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      name: { type: "string" },
                      rating: { type: "number" },
                      review: { type: "string" },
                      date: { type: "string" },
                    },
                    required: ["name", "rating", "review", "date"],
                    additionalProperties: false,
                  },
                },
                suggestedImagePrompt: { type: "string" },
                infographicPrompt: { type: "string" },
              },
              required: ["faqs", "reviews", "suggestedImagePrompt", "infographicPrompt"],
              additionalProperties: false,
            },
          },
        },
        temperature: 0.75,
        max_tokens: 3000,
      });

      const extrasRaw = extrasCompletion.choices[0]?.message?.content || "{}";
      return JSON.parse(sanitizeText(extrasRaw));
    };

    // Execute all section chunkers AND the metadata/extras generator in parallel!
    const [sectionHtmls, extras] = await Promise.all([
      Promise.all(
        outlineHeadings.map((heading, index) => generateSectionChunk(heading, index))
      ),
      generateMetaAndExtras(),
    ]);

    // Combine section HTMLs into a unified high-converting long-form article
    const fullArticleHtml = sectionHtmls.join("\n\n");
    const totalWords = fullArticleHtml.split(/\s+/).length;

    console.log(
      `[AI Blog Generator] Parallel Generation Finished! Total Article Words: ${totalWords}, FAQs: ${extras.faqs?.length}, Reviews: ${extras.reviews?.length}`
    );

    const advocateRoster = [
      'Adv. Priya Sharma',
      'Adv. Rohan Verma',
      'Adv. Siddharth Mehra',
      'Adv. Neha Kapoor',
      'Adv. Vikram Malhotra',
      'Adv. Ananya Iyer',
      'Adv. Pooja Deshmukh',
      'Adv. Arjun Nambiar',
    ];
    const randomAdvocate = advocateRoster[Math.floor(Math.random() * advocateRoster.length)];

    const finalResult = {
      title: analysis.title,
      subtitle: analysis.subtitle,
      metaTitle: analysis.metaTitle,
      metaDescription: analysis.metaDescription,
      slug: analysis.slug,
      exactTopic: analysis.exactTopic,
      category: analysis.category,
      statutoryFramework: analysis.statutoryFramework,
      outline: analysis.outline,
      keyTakeaways: analysis.keyTakeaways,
      popularSearches: analysis.popularSearches,
      author: randomAdvocate,
      description: fullArticleHtml,
      faqs: extras.faqs || [],
      reviews: extras.reviews || [],
      suggestedImagePrompt: extras.suggestedImagePrompt || "Indian IP legal consultation editorial scene",
      infographicPrompt: extras.infographicPrompt || "3D isometric trademark registration workflow flowchart",
      wordCount: totalWords,
    };

    return NextResponse.json(finalResult, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
    });
  } catch (error: any) {
    console.error("[AI Blog Generator] Critical Pipeline Error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error during blog generation." },
      { status: 500 }
    );
  }
}
