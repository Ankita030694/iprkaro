import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: NextRequest) {
    try {
        const { primaryKeyword, secondaryKeyword } = await request.json();

        if (!primaryKeyword) {
            return NextResponse.json({ error: 'Primary keyword is required' }, { status: 400 });
        }

        if (!process.env.HELLO_DROP_CHOO) {
            return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
        }

        const systemPrompt = `You are an expert SEO content strategist and legal blog writer specializing in the Indian IP and legal ecosystem (Trademarks, Copyrights, Patents, Legal Notices, etc.).
    Your task is to generate a comprehensive, SEO-optimized blog article based on the provided keywords.
    The response must be in JSON format and include:
    - title: A catching, SEO-optimized title.
    - subtitle: A descriptive subtitle with keywords.
    - description: The main blog content in HTML format (use <h2>, <h3>, <p>, <ul>, <li> tags). It should be at least 1500 words.
    - metaTitle: SEO meta title (max 60 chars).
    - metaDescription: SEO meta description (max 160 chars).
    - slug: URL-friendly slug.
    - faqs: An array of objects with { question, answer }. Include 5-10 FAQs.
    - reviews: An array of objects with { name, rating, review }. Include 3-5 realistic reviews with Indian names.

    Focus on practical, helpful advice for Indian businesses and entrepreneurs. Use a professional yet accessible tone.`;

        const userPrompt = `Primary Keyword: ${primaryKeyword}
    Secondary Keyword: ${secondaryKeyword || 'None provided'}
    
    Please generate a high-quality blog post.`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o', // Using gpt-4o for better quality
            messages: [
                { role: 'system', content: systemPrompt },
                { role: 'user', content: userPrompt },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.7,
        });

        const content = completion.choices[0].message.content;

        if (!content) {
            throw new Error('No content returned from OpenAI');
        }

        return new NextResponse(content, {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error: any) {
        console.error('Error in generate-article API:', error);
        return NextResponse.json({ error: error.message || 'Failed to generate blog content' }, { status: 500 });
    }
}
