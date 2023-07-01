import { Signature, createSignature } from '@/lib/models/signature';
import { NextRequest, NextResponse } from 'next/server';

export type CreateSignatureApiBody = {
  data: Signature;
};

export async function POST(request: NextRequest) {
  try {
    /*
    const client = await clientPromise;
    const db = client.db('super_sign');

    const signatureData: CreateSignatureApiBody = await request.json();

    const result = await db.collection('signatures').insertOne({
      title: 'New Signature',
      signature: signatureData,
    });
    */

    const body = await request.json();
    const { data } = body as CreateSignatureApiBody;

    const response = await createSignature(data);

    return NextResponse.json({ response });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to insert movie' });
  }
}
