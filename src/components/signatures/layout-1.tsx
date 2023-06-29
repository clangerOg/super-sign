'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import { Link, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

type SignatureLayoutProps = {};

export const SignatureLayout: React.FC<SignatureLayoutProps> = (props) => {
  const { signatureProps: values } = useSignatureContext();

  //const { values } = props;

  return (
    <div>
      <div className="text-sm font-normal text-slate-500">
        <p className="text-lg font-medium text-slate-900">
          {values.personal.firstName} {values.personal.lastName}
        </p>
        <p>{values.personal.jobDescription}</p>
        <p>
          {values.personal.department} | {values.business.name}
        </p>
        <p>{values.personal.additionalInformation}</p>
      </div>

      <div className="my-8 h-px w-full bg-slate-200" />

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Phone size={16} className="text-blue-600" />
          <p>
            {values.personal.phonePrivate} | {values.personal.phoneBusiness}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Mail size={16} className="text-blue-600" />
          <p>
            {values.personal.mail} | {values.business.mail}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link size={16} className="text-blue-600" />
          <p>
            {values.personal.website} | {values.business.website}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <MapPin size={16} className="text-blue-600" />
          <p>
            {values.personal.adress} | {values.business.adress}
          </p>
        </div>
        <div className="max-w-prose text-xs leading-4 text-slate-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            accusamus quisquam nam dolore praesentium reprehenderit cumque,
            deleniti natus, voluptate tempore explicabo et corrupti! Dolore
            excepturi optio temporibus pariatur, voluptate id.
          </p>
        </div>
      </div>
    </div>
  );
};
