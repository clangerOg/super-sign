import { Signature, updateSignature } from '@/lib/models/signature';
import { NextResponse } from 'next/server';

export type UpdateSignatureApiBody = {
  data: {
    _id: string;
    update: Signature;
  };
};

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { data } = body as UpdateSignatureApiBody;

    const response = await updateSignature(data._id, data.update);

    return new Response(JSON.stringify({ response }), {
      headers: { 'content-type': 'application/json' },
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Unable to insert movie' });
  }
}
