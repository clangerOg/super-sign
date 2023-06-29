import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const values: SignatureProps = {
  design: {},
  business: {
    name: 'OrbitGrowth Webdesign Agentur',
    adress: 'Meisterstraße 5, 40573 Meierhausen',
    website: 'https://google.com',
    mail: 'peter@lustig.de',
  },
  personal: {
    firstName: 'Peter',
    lastName: 'Meier',
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

export function setField<P, T extends keyof P>(
  object: P,
  topLevel: T,
  field: keyof P[T],
  value: P[typeof topLevel][typeof field]
) {
  object[topLevel][field] = value;
}

export function setField2<T extends keyof SignatureProps>(
  topLevel: T,
  field: keyof SignatureProps[T],
  value: (typeof values)[typeof topLevel][typeof field]
) {
  values[topLevel][field] = value;
}
