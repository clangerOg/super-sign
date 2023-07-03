'use client';

import { useSignatureContext } from '@/lib/context/signature-context';

export const SignaturePreview = () => {
  const { signature } = useSignatureContext();

  return (
    <div>
      <p>Preview</p>
      <p>Props: {JSON.stringify(signature['configuration'])}</p>
    </div>
  );
};
