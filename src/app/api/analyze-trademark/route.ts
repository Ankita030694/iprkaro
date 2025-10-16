import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { db } from '@/lib/firebase';
import { collection, doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';

// Initialize OpenAI - will be validated in POST handler
const openai = new OpenAI({
  apiKey: process.env.HELLO_DROP_CHOO || 'dummy-key-will-fail',
});

interface AnalysisResult {
  trademarkName: string;
  classNumber: string;
  overallHealth: string;
  registrabilityScore: number;
  registrabilityReasoning: string;
  similarityScore: number;
  similarityReasoning: string;
  classFitScore: number;
  classFitReasoning: string;
  genericnessAssessment: {
    registrability: string;
    similarity: string;
    classFit: string;
  };
  keyFactors: {
    brandStrength: string;
    legalRisk: string;
    marketPosition: string;
    registrationSpeed: string;
    protectionLevel: string;
  };
  alternativeClasses: string[];
  overallRecommendation: {
    status: string;
    message: string;
  };
  createdAt?: any;
  lastUpdated?: any;
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  let docId = '';
  
  try {
    console.log('=== Trademark Analysis API Called ===');
    console.log('Timestamp:', new Date().toISOString());

    // Step 1: Validate API Key
    if (!process.env.HELLO_DROP_CHOO) {
      console.error('❌ HELLO_DROP_CHOO is not configured in environment variables');
      return NextResponse.json(
        { 
          error: 'OpenAI API key not configured',
          details: 'Please set HELLO_DROP_CHOO in your .env.local file',
          step: 'configuration'
        },
        { status: 500 }
      );
    }

    if (process.env.HELLO_DROP_CHOO === 'dummy-key-will-fail' || 
        process.env.HELLO_DROP_CHOO === 'your_HELLO_DROP_CHOO_here') {
      console.error('❌ HELLO_DROP_CHOO is set to placeholder value');
      return NextResponse.json(
        { 
          error: 'OpenAI API key is placeholder',
          details: 'Please replace the placeholder in .env.local with your actual OpenAI API key',
          step: 'configuration'
        },
        { status: 500 }
      );
    }

    console.log('✅ API key configured');

    // Step 2: Parse and validate request body
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (parseError) {
      console.error('❌ Failed to parse request body:', parseError);
      return NextResponse.json(
        { 
          error: 'Invalid request format',
          details: 'Request body must be valid JSON',
          step: 'request_parsing'
        },
        { status: 400 }
      );
    }

    const { trademarkName, classNumber } = requestBody;

    if (!trademarkName || !classNumber) {
      console.error('❌ Missing required fields:', { trademarkName, classNumber });
      return NextResponse.json(
        { 
          error: 'Missing required fields',
          details: 'Both trademarkName and classNumber are required',
          received: { trademarkName: !!trademarkName, classNumber: !!classNumber },
          step: 'validation'
        },
        { status: 400 }
      );
    }

    // Validate trademark name
    if (typeof trademarkName !== 'string' || trademarkName.trim().length === 0) {
      console.error('❌ Invalid trademark name:', trademarkName);
      return NextResponse.json(
        { 
          error: 'Invalid trademark name',
          details: 'Trademark name must be a non-empty string',
          step: 'validation'
        },
        { status: 400 }
      );
    }

    // Validate class number
    const classNum = parseInt(classNumber);
    if (isNaN(classNum) || classNum < 1 || classNum > 45) {
      console.error('❌ Invalid class number:', classNumber);
      return NextResponse.json(
        { 
          error: 'Invalid class number',
          details: 'Class number must be between 1 and 45',
          step: 'validation'
        },
        { status: 400 }
      );
    }

    console.log('✅ Request validated:', { trademarkName, classNumber });

    // Step 3: Normalize the document ID
    docId = `${trademarkName.toLowerCase().trim()}_${classNumber}`;
    console.log('📝 Document ID:', docId);

    // Step 4: Check Firebase cache
    console.log('🔍 Checking Firebase cache...');
    const searchResultsRef = collection(db, 'searchResults');
    const docRef = doc(searchResultsRef, docId);
    
    let docSnap;
    try {
      docSnap = await getDoc(docRef);
    } catch (firebaseError: any) {
      console.error('❌ Firebase read error:', firebaseError);
      return NextResponse.json(
        { 
          error: 'Database connection error',
          details: 'Failed to check cached results in Firebase',
          firebaseError: firebaseError.message,
          step: 'firebase_read'
        },
        { status: 500 }
      );
    }

    if (docSnap.exists()) {
      const cachedData = docSnap.data();
      console.log('✅ Cache hit! Returning cached result');
      console.log('⏱️ Total time:', Date.now() - startTime, 'ms');
      return NextResponse.json(cachedData);
    }

    console.log('⚠️ Cache miss. Generating new analysis...');

    // Step 5: Call OpenAI API
    console.log('🤖 Calling OpenAI API...');

    const prompt = `You are an expert in trademark analysis, brand evaluation, and Indian IP law.

Trademark Name: ${trademarkName}
Proposed Class: ${classNumber}

Analyze this trademark and provide a JSON response with the following structure:

{
  "overallHealth": "Excellent|Good|Fair|Poor",
  "registrabilityScore": 0-100,
  "registrabilityReasoning": "Brief explanation (max 150 chars)",
  "similarityScore": 0-100,
  "similarityReasoning": "Brief explanation (max 150 chars)",
  "classFitScore": 0-100,
  "classFitReasoning": "Brief explanation (max 150 chars)",
  "genericnessAssessment": {
    "registrability": "Brief description (max 100 chars)",
    "similarity": "Brief description (max 100 chars)",
    "classFit": "Brief description (max 100 chars)"
  },
  "keyFactors": {
    "brandStrength": "Brief description (max 80 chars)",
    "legalRisk": "Brief description (max 80 chars)",
    "marketPosition": "Brief description (max 80 chars)",
    "registrationSpeed": "Brief description (max 80 chars)",
    "protectionLevel": "Brief description (max 80 chars)"
  },
  "alternativeClasses": ["Class X - Name", "Class Y - Name"],
  "overallRecommendation": {
    "status": "High|Medium|Low",
    "message": "Detailed recommendation (max 200 chars)"
  }
}

Important:
- Ensure all scores are realistic based on Indian trademark law and actual market conditions
- Keep all text concise and within character limits
- Return ONLY valid JSON, no other text
- Be specific and actionable in recommendations`;

    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a trademark analysis expert. Always respond with valid JSON only.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1500,
      });
    } catch (openaiError: any) {
      console.error('❌ OpenAI API Error:', openaiError);
      
      // Handle specific OpenAI errors
      if (openaiError.status === 401) {
        return NextResponse.json(
          { 
            error: 'Invalid OpenAI API key',
            details: 'The API key is invalid or has been revoked. Please check your .env.local file',
            step: 'openai_auth'
          },
          { status: 500 }
        );
      }
      
      if (openaiError.status === 429) {
        return NextResponse.json(
          { 
            error: 'OpenAI rate limit exceeded',
            details: 'Too many requests. Please try again in a few moments',
            step: 'openai_rate_limit'
          },
          { status: 429 }
        );
      }
      
      if (openaiError.status === 402) {
        return NextResponse.json(
          { 
            error: 'OpenAI quota exceeded',
            details: 'Your OpenAI account has insufficient credits. Please add credits at platform.openai.com/account/billing',
            step: 'openai_quota'
          },
          { status: 500 }
        );
      }

      if (openaiError.code === 'ECONNREFUSED' || openaiError.code === 'ETIMEDOUT') {
        return NextResponse.json(
          { 
            error: 'Network error',
            details: 'Could not connect to OpenAI API. Please check your internet connection',
            step: 'openai_network'
          },
          { status: 500 }
        );
      }
      
      return NextResponse.json(
        { 
          error: 'OpenAI API error',
          details: openaiError.message || 'Unknown error from OpenAI',
          status: openaiError.status,
          step: 'openai_general'
        },
        { status: 500 }
      );
    }

    console.log('✅ OpenAI API responded');

    const responseText = completion.choices[0]?.message?.content;

    if (!responseText) {
      console.error('❌ Empty response from OpenAI');
      return NextResponse.json(
        { 
          error: 'Empty AI response',
          details: 'OpenAI returned an empty response. Please try again',
          step: 'openai_empty_response'
        },
        { status: 500 }
      );
    }

    console.log('📄 Raw AI response length:', responseText.length, 'characters');

    // Step 6: Parse the JSON response
    console.log('🔧 Parsing JSON response...');
    let analysisData: Partial<AnalysisResult>;
    try {
      analysisData = JSON.parse(responseText);
      console.log('✅ JSON parsed successfully');
    } catch (parseError: any) {
      console.error('❌ Failed to parse OpenAI response as JSON');
      console.error('Response text:', responseText.substring(0, 500));
      return NextResponse.json(
        { 
          error: 'Invalid AI response format',
          details: 'AI returned invalid JSON. This is an AI model issue, please try again',
          parseError: parseError.message,
          responsePreview: responseText.substring(0, 200),
          step: 'json_parse'
        },
        { status: 500 }
      );
    }

    // Step 7: Create the final result object with fallbacks
    console.log('📦 Building result object...');
    const result: AnalysisResult = {
      trademarkName,
      classNumber,
      overallHealth: analysisData.overallHealth || 'Good',
      registrabilityScore: analysisData.registrabilityScore || 75,
      registrabilityReasoning: analysisData.registrabilityReasoning || 'Analysis completed',
      similarityScore: analysisData.similarityScore || 50,
      similarityReasoning: analysisData.similarityReasoning || 'Analysis completed',
      classFitScore: analysisData.classFitScore || 85,
      classFitReasoning: analysisData.classFitReasoning || 'Analysis completed',
      genericnessAssessment: analysisData.genericnessAssessment || {
        registrability: 'Trademark uniqueness assessment',
        similarity: 'Existing conflicts evaluation',
        classFit: 'Class appropriateness check',
      },
      keyFactors: analysisData.keyFactors || {
        brandStrength: 'Strong unique brand identity',
        legalRisk: 'Low risk of legal conflicts',
        marketPosition: 'Competitive advantage in market',
        registrationSpeed: 'Fast approval process expected',
        protectionLevel: 'Comprehensive brand protection coverage',
      },
      alternativeClasses: analysisData.alternativeClasses || [],
      overallRecommendation: analysisData.overallRecommendation || {
        status: 'High',
        message: 'Good chance of successful registration',
      },
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp(),
    };

    console.log('✅ Result object created');

    // Step 8: Store in Firebase
    console.log('💾 Saving to Firebase...');
    try {
      await setDoc(docRef, result);
      console.log('✅ Successfully saved to Firebase');
    } catch (firebaseError: any) {
      console.error('❌ Firebase write error:', firebaseError);
      // Still return the result even if caching fails
      console.warn('⚠️ Returning result without caching');
      return NextResponse.json({
        ...result,
        warning: 'Result generated but not cached. Firebase error: ' + firebaseError.message
      });
    }

    const totalTime = Date.now() - startTime;
    console.log('✅ Analysis complete!');
    console.log('⏱️ Total time:', totalTime, 'ms');
    console.log('=== End of Analysis ===\n');

    return NextResponse.json(result);
  } catch (error: any) {
    const totalTime = Date.now() - startTime;
    console.error('❌ Unexpected error in analyze-trademark API');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    console.error('Document ID:', docId);
    console.error('⏱️ Failed after:', totalTime, 'ms');
    console.error('=== End of Failed Analysis ===\n');
    
    return NextResponse.json(
      {
        error: 'Unexpected server error',
        details: error.message || 'Unknown error occurred',
        errorType: error.constructor.name,
        docId: docId || 'not_generated',
        timestamp: new Date().toISOString(),
        step: 'unexpected_error'
      },
      { status: 500 }
    );
  }
}

