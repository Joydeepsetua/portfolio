import { NextRequest, NextResponse } from 'next/server';


// http://localhost:3000/api/hello
export async function GET() {
  try {
    return NextResponse.json({ message: "hello India " })
  } catch (error) {
    console.error('Error fetching Google Play stats:', error);
    return NextResponse.json({ error })
  }
} 