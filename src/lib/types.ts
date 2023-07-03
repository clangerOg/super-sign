// Temporary while we await merge of this fix:
// https://github.com/DefinitelyTyped/DefinitelyTyped/pull/55396

// prettier-ignore
type PropsWithoutRef<P> = P extends any ? ('ref' extends keyof P ? Pick<P, Exclude<keyof P, 'ref'>> : P) : P;
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

type WithDocId<T> = T & { _id: string };

type SignatureDesignProps = {};

type SignatureProps = {
  design: SignatureDesignProps;
  business: {
    name: string;
    adress: string;
    website: string;
    mail: string;
    phone: string;
    department: string;
    jobDescription: string;
    additionalInformation: string;
  };
  personal: {
    firstName: string;
    lastName: string;
    website: string;
    adress: string;
    phone: string;
    mail: string;
  };
  socials: {
    facebook: string;
    twitter: string;
    linkedin: string;
    xing: string;
    instagram: string;
    youtube: string;
    pinterest: string;
  };
  settings: {
    mailClickable: boolean;
    phoneClickable: boolean;
    icons: boolean;
    revertArrangement: boolean;
  };
};
