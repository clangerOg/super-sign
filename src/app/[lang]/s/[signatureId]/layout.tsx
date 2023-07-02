import { SignatureContextProvider } from '@/lib/context/signature-context';
import { SignatureNotFoundError } from '@/lib/exceptions';
import { getSignature } from '@/lib/models/signature';

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

  console.log('layoutSiganture:', signature);

  return (
    <SignatureContextProvider
      signatureProps={signature.configuration}
      signatureId={signature._id.toString()}
    >
      {children}
    </SignatureContextProvider>
  );
}
