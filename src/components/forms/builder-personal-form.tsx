'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { Input } from '../ui/input';

type Props = {};

export const BuilderPersonalForm: React.FC<Props> = (props) => {
  const { setField, signatureProps, setSignatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="personal">
      <p className="text-lg font-semibold text-slate-900">
        Persönliche Informationen
      </p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
        laborum in. Animi officia explicabo quaerat voluptatibus placeat
      </p>
      <div className="mt-12 space-y-8">
        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            First Name
          </p>
          <Input
            type="text"
            value={signatureProps.personal.firstName}
            onChange={(e) => {
              setField('personal', 'firstName', e.target.value);
            }}
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Last Name
          </p>
          <Input
            type="text"
            value={signatureProps.personal.lastName}
            onChange={(e) => {
              setField('personal', 'lastName', e.target.value);
            }}
          />
        </div>
      </div>
    </Tabs.Content>
  );
};
