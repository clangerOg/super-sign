'client-only';
'use client';

import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

const signatureValues: SignatureProps = {
  design: {},
  business: {
    name: 'OrbitGrowth Webdesign Agentur',
    adress: 'Meisterstraße 5, 40573 Meierhausen',
    website: 'https://google.com',
    mail: 'peter@lustig.de',
  },
  personal: {
    firstName: 'Peter',
    lastName: 'Maffay',
    jobDescription: 'Data-Analyst',
    additionalInformation: '',
    website: 'https://google.com',
    adress: 'Meisterstraße 5, 40573 Meierhausen',
    department: 'Human Recruitment',
    phonePrivate: '0 123 456789',
    phoneBusiness: '0 123 456789',
    mail: 'peter@lustig.de',
  },
  socials: {
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    xing: 'https://xing.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    pinterest: 'https://pinterest.com',
  },
  settings: {
    mailClickable: true,
    phoneClickable: true,
    icons: true,
    revertArrangement: false,
  },
};

export type SignatureContextProps = {
  signatureProps: SignatureProps;
  setSignatureProps: React.Dispatch<React.SetStateAction<SignatureProps>>;
};

export const SignatureContext = createContext<SignatureContextProps>({
  setSignatureProps: () => null,
  signatureProps: signatureValues,
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

export const SignatureContextProvider: React.FC<PropsWithChildren> = (
  props
) => {
  const { children } = props;

  const [signatureProps, setSignatureProps] =
    useState<SignatureProps>(signatureValues);

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
