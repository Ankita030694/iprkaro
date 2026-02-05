import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.HELLO_DROP_CHOO,
});

export async function POST(request: NextRequest) {
    try {
        const { prompt } = await request.json();

        if (!prompt) {
            return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
        }

        if (!process.env.HELLO_DROP_CHOO) {
            return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
        }

        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: `${prompt} | Professional blog header, high quality, realistic, modern aesthetic`,
            n: 1,
            size: "1024x1024",
            quality: "standard",
        });

        const imageUrl = response.data?.[0]?.url;

        if (!imageUrl) {
            throw new Error('No image URL returned from OpenAI');
        }

        return NextResponse.json({ imageUrl });
    } catch (error: any) {
        console.error('Error in generate-image API:', error);
        return NextResponse.json({ error: error.message || 'Failed to generate image' }, { status: 500 });
    }
}
