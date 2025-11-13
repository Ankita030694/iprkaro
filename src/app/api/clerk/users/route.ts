import { NextResponse } from 'next/server';
import { clerkClient } from '@clerk/nextjs/server';

export async function GET() {
  try {
    // Fetch all users from Clerk
    const client = await clerkClient();
    const response = await client.users.getUserList({
      limit: 100,
      orderBy: '-created_at'
    });

    // Format user data
    const users = response.data.map((user) => ({
      id: user.id,
      firstName: user.firstName || '',
      lastName: user.lastName || '',
      emailAddress: user.emailAddresses[0]?.emailAddress || '',
      phoneNumber: (user.publicMetadata as any)?.phone || '',
      createdAt: user.createdAt
    }));

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error fetching Clerk users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

