import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';
import { db } from '@/lib/firebase';
import { collection, doc, getDoc, setDoc, serverTimestamp, updateDoc, arrayUnion } from 'firebase/firestore';
import { auth } from '@clerk/nextjs/server';

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
    famousMark?: boolean;
  };
  alternativeClasses: string[];
  overallRecommendation: {
    status: string;
    message: string;
  };
  sources?: Array<{
    url: string;
    fetched: string;
  }>;
  userId?: string;
  userIds?: string[];
  userPhoneNumbers?: Record<string, string>;
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

    const { trademarkName, classNumber, phoneNumber } = requestBody;

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

    let normalizedPhone: string | null = null;
    if (phoneNumber !== undefined) {
      if (typeof phoneNumber !== 'string') {
        console.error('❌ Invalid phone number type:', typeof phoneNumber);
        return NextResponse.json(
          {
            error: 'Invalid phone number',
            details: 'Phone number must be a string value',
            step: 'validation'
          },
          { status: 400 }
        );
      }

      const trimmedPhone = phoneNumber.trim();
      if (trimmedPhone.length === 0) {
        console.error('❌ Empty phone number string received');
        return NextResponse.json(
          {
            error: 'Invalid phone number',
            details: 'Phone number cannot be empty when provided',
            step: 'validation'
          },
          { status: 400 }
        );
      }

      const phonePattern = /^\+?[1-9]\d{9,14}$/;
      if (!phonePattern.test(trimmedPhone)) {
        console.error('❌ Phone number failed validation:', trimmedPhone);
        return NextResponse.json(
          {
            error: 'Invalid phone number',
            details: 'Provide a valid international phone number (10-15 digits, optional leading +)',
            step: 'validation'
          },
          { status: 400 }
        );
      }

      normalizedPhone = trimmedPhone;
    }

    console.log('✅ Request validated:', { trademarkName, classNumber, phoneIncluded: !!normalizedPhone });

    // Step 2.5: Get userId from Clerk auth (if authenticated)
    let userId: string | null = null;
    try {
      const authResult = await auth();
      userId = authResult.userId;
      if (userId) {
        console.log('✅ Authenticated user:', userId);
      } else {
        console.log('ℹ️ Public search (no authentication)');
      }
    } catch (authError) {
      // User is not authenticated (public search), this is okay
      console.log('ℹ️ Public search (no authentication)');
    }

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
      const cachedData = docSnap.data() as AnalysisResult & { userIds?: string[]; userPhoneNumbers?: Record<string, string> };

      // Ensure userPhoneNumbers is an object
      const userPhoneNumbers = (cachedData.userPhoneNumbers && typeof cachedData.userPhoneNumbers === 'object')
        ? { ...cachedData.userPhoneNumbers }
        : {};

      if (normalizedPhone) {
        const existingPhoneEntry = Object.entries(userPhoneNumbers).find(
          ([storedUserId, storedPhone]) => storedPhone === normalizedPhone && storedUserId !== (userId || 'public')
        );

        if (existingPhoneEntry && existingPhoneEntry[0] !== userId) {
          console.error('❌ Phone number already associated with another user:', existingPhoneEntry[0]);
          return NextResponse.json(
            {
              error: 'Phone number already in use',
              details: 'This phone number is already linked to another user',
              step: 'validation_conflict'
            },
            { status: 409 }
          );
        }
      }

      if (userId && normalizedPhone && userPhoneNumbers[userId] !== normalizedPhone) {
        userPhoneNumbers[userId] = normalizedPhone;
        try {
          await updateDoc(docRef, {
            [`userPhoneNumbers.${userId}`]: normalizedPhone,
            lastUpdated: serverTimestamp(),
          });
        } catch (updateError) {
          console.error('❌ Failed to update userPhoneNumbers map:', updateError);
        }
        cachedData.userPhoneNumbers = userPhoneNumbers;
      } else if (!cachedData.userPhoneNumbers && Object.keys(userPhoneNumbers).length > 0) {
        cachedData.userPhoneNumbers = userPhoneNumbers;
      }

      const existingUserIds = Array.isArray(cachedData.userIds) ? cachedData.userIds : [];
      const idsToAdd = new Set<string>();

      if (cachedData.userId && !existingUserIds.includes(cachedData.userId)) {
        idsToAdd.add(cachedData.userId);
      }

      if (userId && !existingUserIds.includes(userId)) {
        idsToAdd.add(userId);
      }

      const idsArray = Array.from(idsToAdd);

      if (idsArray.length > 0) {
        try {
          await updateDoc(docRef, { userIds: arrayUnion(...idsArray) });
          cachedData.userIds = Array.from(new Set([...existingUserIds, ...idsArray]));
        } catch (updateError) {
          console.error('❌ Failed to update userIds array:', updateError);
          cachedData.userIds = Array.from(new Set([...existingUserIds, ...idsArray]));
        }
      } else if (!Array.isArray(cachedData.userIds)) {
        cachedData.userIds = existingUserIds;
      }

      console.log('✅ Cache hit! Returning cached result');
      console.log('⏱️ Total time:', Date.now() - startTime, 'ms');
      return NextResponse.json(cachedData);
    }

    console.log('⚠️ Cache miss. Generating new analysis...');

    // Step 5: Fetch data from QuickCompany
    console.log('🔍 Fetching trademark data from QuickCompany...');
    
    const quickCompanyUrl = `https://www.quickcompany.in/trademarks?q=${encodeURIComponent(trademarkName)}`;
    console.log('📍 QuickCompany URL:', quickCompanyUrl);
    
    let quickCompanyData = '';
    let fetchedSuccessfully = false;
    
    try {
      const response = await fetch(quickCompanyUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        },
        signal: AbortSignal.timeout(10000), // 10 second timeout
      });
      
      if (response.ok) {
        const html = await response.text();
        
        // Extract relevant information from the HTML
        // Look for registered trademarks, classes, and statuses
        const registeredMatches = html.match(/Registered Class: (\d+)/gi) || [];
        const statusMatches = html.match(/Registered|Formalities Chk Pass|Abandoned|Objected|Refused|Accepted & Advertised|Opposed/gi) || [];
        
        // Count matches
        const totalMatches = html.match(/(\d+) of ([\d,]+) Matches/);
        const matchCount = totalMatches ? totalMatches[2].replace(/,/g, '') : '0';
        
        quickCompanyData = `
Trademark Database Search Results for "${trademarkName}":
- Total similar trademark records found in database: ${matchCount}
- Registered trademarks in database: ${registeredMatches.length}
- Status distribution: ${statusMatches.slice(0, 10).join(', ')}

Analysis: ${parseInt(matchCount) > 0 ? 'CONFLICTS EXIST' : 'NO CONFLICTS FOUND'} - similar/identical trademarks are already present in official databases.
${parseInt(matchCount) > 100 ? 'HIGH CONFLICT ZONE - Many similar marks exist in database.' : ''}
${parseInt(matchCount) > 500 ? 'EXTREME CONFLICT - Over 500 similar marks found in database!' : ''}
`;
        
        fetchedSuccessfully = true;
        console.log('✅ QuickCompany data fetched successfully');
        console.log(`📊 Found ${matchCount} matches`);
      } else {
        console.warn('⚠️ QuickCompany fetch failed:', response.status);
        quickCompanyData = 'Unable to fetch data from trademark databases. Analyze based on general knowledge.';
      }
    } catch (error: any) {
      console.error('❌ QuickCompany fetch error:', error.message);
      quickCompanyData = 'Unable to fetch data from trademark databases. Analyze based on general knowledge.';
    }

    // Step 6: Call OpenAI API
    console.log('🤖 Calling OpenAI API...');

    const systemPrompt = `You are an expert in trademark analysis, brand evaluation, and Indian IP law.`;

    const userPrompt = `Trademark Name: ${trademarkName}
Proposed Class: ${classNumber}

REAL DATA FROM TRADEMARK DATABASE:
${quickCompanyData}

Based on the REAL data above, analyze this trademark and provide the following metrics with a score out of 100:

1. Registrability Score – Likelihood of successful registration. Include reasoning.
2. Similarity Score – Likelihood of conflict with existing trademarks. Include reasoning.
3. Class Fit Score – How appropriate the proposed class is. Include reasoning.
4. Alternative Classes – Suggest other relevant classes to improve approval chances.
5. Overall Recommendation – Based on the scores, indicate:
   ✅ High chance – proceed with filing
   ⚠️ Medium risk – consider modifications
   ❌ Low chance – revise trademark or class

⚠️ CRITICAL: Use the REAL DATA from trademark database above to make your judgment!

SCORING BASED ON DATABASE SEARCH RESULTS:

IF Database shows 0 matches:
- Similarity Score: 5-15 (no conflicts found)
- Registrability Score: 80-95 (excellent chance)
- Overall Recommendation: "High"

IF Database shows 1-50 matches:
- Similarity Score: 30-50 (some conflicts)
- Registrability Score: 50-70 (moderate chance)
- Overall Recommendation: "Medium"

IF Database shows 50-500 matches:
- Similarity Score: 60-80 (many conflicts)
- Registrability Score: 20-40 (low chance)
- Overall Recommendation: "Medium" or "Low"

IF Database shows 500+ matches:
- Similarity Score: 85-100 (extreme conflicts)
- Registrability Score: 0-20 (very unlikely)
- Overall Recommendation: "Low"

IF EXACT MATCH FOUND (same name + same class):
- Similarity Score: 95-100 (exact match exists)
- Registrability Score: 0-10 (CANNOT register - already exists)
- Overall Recommendation: "Low" with message "Already registered. Choose different name."
- Legal Risk: "Extreme - trademark already exists"

IF FAMOUS BRAND (Nike, Apple, Google, etc.):
- Similarity Score: 95-100 (world-famous brand)
- Registrability Score: 0-10 (impossible to register)
- Overall Recommendation: "Low" with message "Famous brand. Do not proceed."
- famousMark: true

CRITICAL SCORING LOGIC - FOLLOW STRICTLY:

1. Registrability Score (0-100): Higher = Better chance of registration
   - 80-100: Excellent chance (unique, no conflicts)
   - 60-79: Good chance (minor concerns)
   - 40-59: Moderate chance (some conflicts)
   - 20-39: Low chance (significant conflicts)
   - 0-19: Very unlikely (famous brand or many conflicts)

2. Similarity Score (0-100): Higher = MORE conflicts = WORSE for applicant
   - 0-20: Very different (GOOD - proceed)
   - 21-40: Some similarity (caution needed)
   - 41-60: Moderate similarity (risky)
   - 61-80: High similarity (likely rejection)
   - 81-100: Exact/near match (DO NOT PROCEED)

3. Class Fit Score (0-100): Higher = Better fit for the class
   - 80-100: Perfect fit
   - 60-79: Good fit
   - 40-59: Acceptable fit
   - 20-39: Poor fit
   - 0-19: Wrong class

INVERSE RELATIONSHIP RULE:
If Similarity Score is HIGH (>60), then Registrability Score MUST be LOW (<40).
If Similarity Score is LOW (<30), then Registrability Score can be HIGH (>70).

Examples based on database search results:
- Database: 1,001 matches → Similarity: 90 → Registrability: 15 (extreme conflict)
- Database: 500 matches → Similarity: 80 → Registrability: 25 (high conflict)
- Database: 100 matches → Similarity: 65 → Registrability: 35 (many conflicts)
- Database: 20 matches → Similarity: 40 → Registrability: 60 (some conflicts)
- Database: 0 matches → Similarity: 10 → Registrability: 85 (unique, proceed!)

Return ONLY valid JSON in this exact format (no other text):
{
  "overallHealth": "Excellent|Good|Fair|Poor",
  "registrabilityScore": 0-100,
  "registrabilityReasoning": "explanation",
  "similarityScore": 0-100,
  "similarityReasoning": "explanation",
  "classFitScore": 0-100,
  "classFitReasoning": "explanation",
  "genericnessAssessment": {
    "registrability": "text",
    "similarity": "text",
    "classFit": "text"
  },
  "keyFactors": {
    "brandStrength": "text",
    "legalRisk": "text",
    "marketPosition": "text",
    "registrationSpeed": "text",
    "protectionLevel": "text",
    "famousMark": false
  },
  "alternativeClasses": ["Class X - Name"],
  "overallRecommendation": {
    "status": "High|Medium|Low",
    "message": "text"
  },
  "sources": [{"url": "url", "fetched": "YYYY-MM-DD"}]
}

Overall Recommendation Logic:
- "High": registrabilityScore > 70 AND similarityScore < 30 (good chance, low conflicts)
- "Medium": registrabilityScore 40-70 OR similarityScore 30-60 (moderate risk)
- "Low": registrabilityScore < 40 OR similarityScore > 60 (high risk, do not proceed)

CRITICAL REMINDERS:
1. USE THE DATABASE DATA PROVIDED - don't ignore the match count!
2. High Similarity = Low Registrability (INVERSE relationship)
3. If database shows 500+ matches → Similarity 85-100, Registrability 0-20
4. If database shows 0 matches → Similarity 5-15, Registrability 80-95
5. Be realistic - don't give false hope if database shows many conflicts
6. Do NOT mention specific database names in your reasoning - use generic terms like "existing trademarks database" or "trademark registry"
7. Include IP India and official sources in sources array`;

    let completion;
    try {
      completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt,
          },
          {
            role: 'user',
            content: userPrompt,
          },
        ],
        temperature: 0,
        max_tokens: 2000,
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
    const initialUserPhoneNumbers =
      userId && normalizedPhone ? { [userId]: normalizedPhone } : {};

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
        famousMark: false,
      },
      alternativeClasses: analysisData.alternativeClasses || [],
      overallRecommendation: analysisData.overallRecommendation || {
        status: 'High',
        message: 'Good chance of successful registration',
      },
      sources: analysisData.sources || [
        {
          url: 'https://ipindia.gov.in/tmrsearch.htm',
          fetched: new Date().toISOString().split('T')[0],
        },
      ],
      ...(userId && { userId }),
      userIds: userId ? [userId] : [],
      userPhoneNumbers: initialUserPhoneNumbers,
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

