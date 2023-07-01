'client-only';
'use client';

import React, { createContext, useContext, useState } from 'react';
import { defaultSignatureValues } from '../utils';

export type SignatureContextProps = {
  signatureProps: SignatureProps;
  setSignatureProps: React.Dispatch<React.SetStateAction<SignatureProps>>;
};

export const SignatureContext = createContext<SignatureContextProps>({
  setSignatureProps: () => null,
  signatureProps: defaultSignatureValues,
});

export const useSignatureContext = () => {
  const { signatureProps, setSignatureProps } = useContext(SignatureContext);

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

  return { signatureProps, setSignatureProps, setField };
};

type SignatureContextProviderProps = React.PropsWithChildren & {
  signatureProps?: SignatureProps;
};

export const SignatureContextProvider: React.FC<
  SignatureContextProviderProps
> = (props) => {
  const { signatureProps: parentProps, children } = props;

  const [signatureProps, setSignatureProps] = useState<SignatureProps>(
    parentProps || defaultSignatureValues
  );

  return (
    <SignatureContext.Provider
      value={{
        setSignatureProps: setSignatureProps,
        signatureProps: signatureProps,
      }}
    >
      {children}
    </SignatureContext.Provider>
  );
};
