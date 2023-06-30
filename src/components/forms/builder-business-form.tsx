'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { Input } from '../ui/input';

type BuilderBusinessFormProps = {
  dictionary: {
    title: string;
    description: string;
    inputs: {
      name: {
        label: string;
        placeholder: string;
      };
    };
  };
};

export const BuilderBusinessForm: React.FC<BuilderBusinessFormProps> = (
  props
) => {
  const { dictionary } = props;

  const { setField, signatureProps, setSignatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="business">
      <p className="text-lg font-semibold text-slate-900">{dictionary.title}</p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        {dictionary.description}
      </p>
      <div className="mt-12 space-y-8">
        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {dictionary.inputs.name.label}
          </p>
          <Input
            type="text"
            value={signatureProps.business.name}
            placeholder={dictionary.inputs.name.placeholder}
            onChange={(e) => {
              setField('business', 'name', e.target.value);
            }}
          />
        </div>
      </div>
    </Tabs.Content>
  );
};
