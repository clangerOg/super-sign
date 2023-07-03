'client-only';
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Signature } from '../models/signature';
import { defaultSignatureValues } from '../utils';

export type SignatureContextProps = {
  signature: WithDocId<Signature>;
  setSignature: React.Dispatch<React.SetStateAction<WithDocId<Signature>>>;
};

export const SignatureContext = createContext<SignatureContextProps>({
  setSignature: () => null,
  signature: {
    _id: '000000000000000000000000',
    createdAt: Date.now(),
    settings: {
      public: false,
    },
    title: 'New Signature',
    configuration: defaultSignatureValues,
  },
});

export const useSignatureContext = () => {
  const { signature, setSignature } = useContext(SignatureContext);

  /** 
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

    setSignature((prevState) => ({
      ...prevState,
      configuration: {
        [topLevel]: {
          ...prevState['configuration'][topLevelval],
          [field]: value,
        },
      },
    }));
  }*/

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

    setSignature((prevState: WithDocId<Signature>) => ({
      ...prevState,
      configuration: {
        ...prevState['configuration'],
        [topLevel]: {
          ...prevState['configuration'][topLevelval],
          [field]: value,
        },
      },
    }));
  }

  return { signature, setSignature, setField };
};

type SignatureContextProviderProps = React.PropsWithChildren & {
  signature: WithDocId<Signature>;
};

export const SignatureContextProvider: React.FC<
  SignatureContextProviderProps
> = (props) => {
  const { signature: inheritedSignature, children } = props;

  const [signature, setSignature] = useState<WithDocId<Signature>>(
    inheritedSignature || {
      _id: '000000000000000000000000',
      title: 'New Signature',
      createdAt: Date.now(),
      settings: {
        public: false,
      },
      configuration: defaultSignatureValues,
    }
  );

  // DEBUG
  useEffect(() => {
    console.log('parentProps:', inheritedSignature);
  }, [inheritedSignature]);

  // DEBUG
  useEffect(() => {
    console.log('signatureProps:', signature);
  }, [signature]);

  return (
    <SignatureContext.Provider
      value={{
        signature,
        setSignature,
      }}
    >
      {children}
    </SignatureContext.Provider>
  );
};
