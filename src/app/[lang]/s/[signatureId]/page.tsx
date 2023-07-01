import { SignaturePreview } from '@/components/sig-preview';

export default async function Page({
  params,
}: {
  params: { signatureId: string };
}) {
  return (
    <div>
      Hello world: {params.signatureId}
      <SignaturePreview />
    </div>
  );
}
