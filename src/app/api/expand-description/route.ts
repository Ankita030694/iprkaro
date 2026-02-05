import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: NextRequest) {
    try {
        const { currentDescription, expansionSubtopics, primaryKeyword } = await request.json();

        if (!currentDescription) {
            return NextResponse.json({ error: 'Current description is required' }, { status: 400 });
        }

        if (!expansionSubtopics) {
            return NextResponse.json({ error: 'Expansion subtopics are required' }, { status: 400 });
        }

        if (!process.env.HELLO_DROP_CHOO) {
            return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
        }

        const systemPrompt = `You are an expert SEO and AEO legal content strategist for IPR Karo (www.iprkaro.com).
        Your task is to expand the existing blog description by adding NEW, detailed sections based on the provided subtopics.
        
        Guidelines:
        1. Maintain the existing HTML structure and professional tone.
        2. Seamlessly integrate the new content into the current description.
        3. Follow Google 2025 SEO and E-E-A-T guidelines.
        4. Include internal links naturally to:
           - https://www.iprkaro.com/
           - https://www.iprkaro.com/our-services
           - https://www.iprkaro.com/our-services/trademark-registration
           - https://www.iprkaro.com/our-services/copyright-registration
           - https://www.iprkaro.com/our-services/patent-registration
        5. Use <h2>, <h3>, <h4>, <p>, <ul>, <li>, and <table> tags as appropriate.
        6. Do NOT replace the existing content; only ADD to it or refine it if necessary to maintain flow.
        7. Ensure the total word count increases significantly (aiming for highly detailed expansion).
        
        Return the updated description in HTML format.`;

        const userPrompt = `Primary Keyword: ${primaryKeyword || 'Not provided'}
        Current Description: ${currentDescription}
        
        Expansion Subtopics/Instructions: ${expansionSubtopics}
        
        Please provide the fully expanded HTML content.`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            temperature: 0.7,
        });

        const expandedContent = completion.choices[0].message.content;

        if (!expandedContent) {
            throw new Error('No content returned from OpenAI');
        }

        // The response should be the pure HTML string
        return NextResponse.json({ expandedDescription: expandedContent });
    } catch (error: any) {
        console.error('Error in expand-description API:', error);
        return NextResponse.json({ error: error.message || 'Failed to expand description' }, { status: 500 });
    }
}
