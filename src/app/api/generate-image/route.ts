import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 300;

export async function POST(req: NextRequest) {
  const apiKey = process.env.HELLO_DROP_CHOO;
  if (!apiKey) {
    return NextResponse.json(
      { error: "OpenAI API configuration secret (HELLO_DROP_CHOO) is not set." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const rawPrompt = typeof body.prompt === "string" ? body.prompt : undefined;
    const isInfographic =
      body.isInfographic === true ||
      body.type === "infographic" ||
      (rawPrompt &&
        (rawPrompt.toLowerCase().includes("infographic") ||
          rawPrompt.toLowerCase().includes("flowchart") ||
          rawPrompt.toLowerCase().includes("isometric") ||
          rawPrompt.toLowerCase().includes("workflow")));

    if (!rawPrompt) {
      return NextResponse.json(
        { error: "Missing image prompt string parameter." },
        { status: 400 }
      );
    }

    // Enhance prompt based on whether it's an infographic or editorial cover photo
    let enhancedPrompt = rawPrompt;
    if (isInfographic) {
      enhancedPrompt = `An elegant, clean, modern legal process infographic poster for IPR Karo. Minimalist executive graphic design layout on a crisp bright white background with sleek IPR Karo royal purple (#7C3AED), pastel lilac (#DECFFB), and deep charcoal accents.
TOP HEADER: Sleek royal purple (#7C3AED) and dark charcoal banner with the Scales of Justice and Registered Trademark seal on left, title in bold modern uppercase typography, and "IPR KARO - LEGAL INSIGHTS & STATUTORY ROADMAP" subtitle.
CORE SECTION (PROCEDURAL ROADMAP): A spacious, easy-to-read 4-step linear procedural workflow with large rounded cards:
- Step 1: Trademark Search & Class Selection (Class 1-45 verification)
- Step 2: Form TM-A Filing & Official Fee Payment (Same-Day Acknowledgement)
- Step 3: Examination & Objection Clearance (Sections 9 & 11 compliance)
- Step 4: Trademark Journal Publication & Registration Certificate ®
BOTTOM SECTION: 3 clean, bold metric callout pills (e.g. 100% Online Digital Filing | 30-Day Statutory Reply Window | Guaranteed Advocate Representation).
Aesthetic: Spacious, modern, clean typography, minimalist vector icons, generous whitespace, royal purple (#7C3AED), pastel lilac (#DECFFB), deep navy/charcoal (#241344, #171717), and white. STRICTLY NO GREEN, NO YELLOW, NO GOLD. Ultra-sharp vector presentation.
Topic Context: ${rawPrompt}`;
    } else {
      enhancedPrompt = `High-end cinematic editorial photography of an Indian startup founder consulting with a senior trademark advocate in a modern high-rise law office in New Delhi. On the sleek boardroom wall in the background, there is an elegant brushed-metal office plaque clearly reading "IPR KARO - ADVOCATES & IP ATTORNEYS". The advocate in a navy blazer and founder are reviewing an official stamped Form TM-A trademark registration certificate on the table with a laptop. Warm architectural lighting, sleek purple and lilac accents matching IPR Karo theme, crisp Leica 35mm f/1.8 depth of field, natural realistic skin tones, authoritative, premium, 8k resolution. Context: ${rawPrompt}`;
    }

    console.log(
      `[AI Image Generator] Generating ${
        isInfographic ? "3D Infographic" : "Editorial Cover"
      } with prompt: "${enhancedPrompt.substring(0, 70)}..."`
    );

    // Attempt OpenAI gpt-image-2 with a 120-second timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 120000);

    try {
      console.log("[AI Image Generator] Sending request to OpenAI gpt-image-2 API...");
      const openAiResponse = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: "gpt-image-2",
            prompt: enhancedPrompt,
            n: 1,
            size: "1024x1024",
          }),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (openAiResponse.ok) {
        const data = await openAiResponse.json();
        const firstItem = data.data?.[0];
        const imageUrl = firstItem?.b64_json
          ? `data:image/png;base64,${firstItem.b64_json}`
          : firstItem?.url;

        if (imageUrl) {
          console.log("[AI Image Generator] OpenAI gpt-image-2 generation succeeded!");
          return NextResponse.json({
            success: true,
            imageUrl: imageUrl,
            isInfographic: isInfographic,
            model: "gpt-image-2",
          });
        }
      } else {
        const errorData = await openAiResponse.json().catch(() => ({}));
        console.warn(
          `[AI Image Generator] OpenAI gpt-image-2 returned status ${openAiResponse.status}:`,
          errorData
        );
      }
    } catch (openAiErr: any) {
      clearTimeout(timeoutId);
      console.warn(
        `[AI Image Generator] OpenAI gpt-image-2 error: ${openAiErr.message}.`
      );
    }

    // High-speed Pollinations AI (FLUX) Fallback
    const encodedPrompt = encodeURIComponent(
      enhancedPrompt.substring(0, 400).replace(/[^\w\s,.-]/g, "")
    );
    const dynamicFallbackUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=1200&height=630&nologo=true&seed=${Math.floor(
      Math.random() * 1000000
    )}`;

    return NextResponse.json({
      success: true,
      imageUrl: dynamicFallbackUrl,
      isFallback: true,
      isInfographic: isInfographic,
      warning:
        "OpenAI generation resolved via high-speed Pollinations AI (FLUX) fallback.",
    });
  } catch (error: any) {
    console.error("[AI Image Generator] Critical Route Error:", error);

    const defaultFallbackUrl =
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&h=630&q=80";

    return NextResponse.json({
      success: true,
      imageUrl: defaultFallbackUrl,
      isFallback: true,
      warning: `Critical crash: ${error.message}. Loaded default legal balance vector.`,
    });
  }
}
