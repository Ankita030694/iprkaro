import { NextRequest, NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

export async function POST(request: NextRequest) {
  try {
    // Check if Clerk keys are configured
    if (!process.env.CLERK_SECRET_KEY) {
      console.error('❌ CLERK_SECRET_KEY is not set in environment variables');
      return NextResponse.json(
        { error: 'Clerk API keys are not configured. Please add CLERK_SECRET_KEY to .env.local' },
        { status: 500 }
      );
    }

    console.log('✅ Clerk secret key is configured');

    const body = await request.json();
    console.log('Received request body:', body);
    const { firstName, lastName, email, phone, password } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !password) {
      console.log('Validation failed - Missing fields:', {
        firstName: !!firstName,
        lastName: !!lastName,
        email: !!email,
        phone: !!phone,
        password: !!password
      });
      return NextResponse.json(
        { 
          error: 'All fields are required',
          missing: {
            firstName: !firstName,
            lastName: !lastName,
            email: !email,
            phone: !phone,
            password: !password
          }
        },
        { status: 400 }
      );
    }

    console.log('✅ All fields validated, creating user in Clerk...');

    // Create user in Clerk
    const client = await clerkClient();
    console.log('✅ Clerk client initialized');
    
    // Create user without phoneNumber field (store in metadata instead)
    const user = await client.users.createUser({
      firstName,
      lastName,
      emailAddress: [email],
      password,
      publicMetadata: {
        phone,  // Store phone in metadata to avoid country code issues
        role: 'partner'
      }
    });

    console.log('✅ User created successfully:', user.id);

    return NextResponse.json({
      success: true,
      userId: user.id,
      email: user.emailAddresses[0].emailAddress
    });
  } catch (error: any) {
    console.error('Error creating Clerk user:', error);
    
    // Handle specific Clerk errors
    if (error.errors && error.errors.length > 0) {
      console.error('Clerk error details:', JSON.stringify(error.errors, null, 2));
      const errorMessage = error.errors[0].message;
      const errorCode = error.errors[0].code;
      console.error('First error:', { message: errorMessage, code: errorCode });
      
      return NextResponse.json(
        { 
          error: errorMessage,
          code: errorCode,
          details: error.errors
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to create user. Please try again.' },
      { status: 500 }
    );
  }
}

