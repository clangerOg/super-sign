import { SignatureContextProvider } from '@/lib/context/signature-context';
import { SignatureNotFoundError } from '@/lib/exceptions';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

async function getSignature(signatureId: string) {
  const client = await clientPromise;
  const db = await client.db('super_sign');

  if (ObjectId.isValid(signatureId) === false) return null;

  const id = new ObjectId(signatureId);

  const res = await db.collection('signatures').findOne({
    _id: id,
  });

  return res;
}

export default async function SignatuesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { signatureId: string };
}) {
  if (!params.signatureId) {
    throw new SignatureNotFoundError();
  }

  const signature = await getSignature(params.signatureId);

  if (!signature || signature == null) {
    throw new SignatureNotFoundError();
  }

  console.log('signature:', signature);

  return (
    <SignatureContextProvider signatureProps={signature.signature}>
      {children}
    </SignatureContextProvider>
  );
}
