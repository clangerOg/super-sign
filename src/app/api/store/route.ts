import clientPromise from '@/lib/mongodb/mongodb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db('sample_mflix');

    const movies = await db
      .collection('movies')
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to fetch movies' });
  }
}
