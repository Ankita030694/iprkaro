import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  return NextResponse.json({
    success: true,
    userId: 'mock_id',
    email: 'mock@example.com'
  });
}

