'use client';

import { useSignatureContext } from '@/lib/context/signature-context';

export const SignaturePreview = () => {
  const { signatureProps, setSignatureProps } = useSignatureContext();

  return (
    <div>
      <p>Preview</p>
      <p>Props: {JSON.stringify(signatureProps)}</p>
    </div>
  );
};
