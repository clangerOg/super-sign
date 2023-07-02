import { Signature, createSignature } from '@/lib/models/signature';
import { NextRequest, NextResponse } from 'next/server';

export type CreateSignatureApiBody = {
  data: Signature;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data } = body as CreateSignatureApiBody;

    const response = await createSignature(data);

    return NextResponse.json({ response });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to insert movie' });
  }
}
