'client-only';
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultSignatureValues } from '../utils';

export type SignatureContextProps = {
  signatureProps: SignatureProps;
  setSignatureProps: React.Dispatch<React.SetStateAction<SignatureProps>>;
  signatureId: string;
};

export const SignatureContext = createContext<SignatureContextProps>({
  setSignatureProps: () => null,
  signatureProps: defaultSignatureValues,
  signatureId: '',
});

export const useSignatureContext = () => {
  const { signatureProps, setSignatureProps, signatureId } =
    useContext(SignatureContext);

  function setField<P extends SignatureProps, T extends keyof P>(
    topLevel: T,
    field: keyof P[T],
    value: P[typeof topLevel][typeof field]
  ) {
    const topLevelval = topLevel as
      | 'design'
      | 'business'
      | 'personal'
      | 'socials'
      | 'settings';

    setSignatureProps((prevState) => ({
      ...prevState,
      [topLevel]: {
        ...prevState[topLevelval],
        [field]: value,
      },
    }));
  }

  return { signatureProps, setSignatureProps, setField, signatureId };
};

type SignatureContextProviderProps = React.PropsWithChildren & {
  signatureProps?: SignatureProps;
  signatureId?: string;
};

export const SignatureContextProvider: React.FC<
  SignatureContextProviderProps
> = (props) => {
  const { signatureProps: parentProps, signatureId, children } = props;

  const [signatureProps, setSignatureProps] = useState<SignatureProps>(
    parentProps || defaultSignatureValues
  );

  useEffect(() => {
    console.log('parentProps:', parentProps);
  }, [parentProps]);

  useEffect(() => {
    console.log('signatureProps:', signatureProps);
  }, [signatureProps]);

  return (
    <SignatureContext.Provider
      value={{
        setSignatureProps: setSignatureProps,
        signatureProps: signatureProps,
        signatureId: `${signatureId}`,
      }}
    >
      {children}
    </SignatureContext.Provider>
  );
};
