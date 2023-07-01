import clientPromise from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('super_sign');

    const signatureData = await request.json();

    const result = await db.collection('signatures').insertOne({
      title: 'New Signature',
      signature: signatureData,
    });

    return NextResponse.json({ result: result });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to insert movie' });
  }
}
