import { SignaturePreview } from '@/components/sig-preview';
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

export default async function Page({
  params,
}: {
  params: { signatureId: string };
}) {
  /** 
  if (!params.signatureId) {
    return <div>Signature not found</div>;
  }

  const signature = await getSignature(params.signatureId);

  if (!signature || signature == null) {
    return <div>Signature not available</div>;
  }

  console.log('signature:', signature);
  */

  return (
    <div>
      Hello world: {params.signatureId}
      <SignaturePreview />
    </div>
  );
}
