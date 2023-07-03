import { SignatureContextProvider } from '@/lib/context/signature-context';
import { SignatureNotFoundError } from '@/lib/exceptions';
import { Signature, getSignature } from '@/lib/models/signature';

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

  const parsedSignature: WithDocId<Signature> = {
    ...signature,
    _id: signature._id.toString(),
  };

  console.log('layoutSiganture:', signature);

  return (
    <SignatureContextProvider signature={parsedSignature}>
      {children}
    </SignatureContextProvider>
  );
}
