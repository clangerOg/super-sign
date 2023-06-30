'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { FormField, FormInput, FormLabel } from '../form';

type BuilderPersonalFormProps = {
  dictionary: {
    title: string;
    description: string;
    inputs: {
      [key in keyof SignatureProps['personal']]: {
        label: string;
        placeholder: string;
      };
    };
  };
};

export const BuilderPersonalForm: React.FC<BuilderPersonalFormProps> = (
  props
) => {
  const { dictionary } = props;

  const { setField, signatureProps, setSignatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="personal">
      <p className="text-lg font-semibold text-slate-900">{dictionary.title}</p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        {dictionary.description}
      </p>
      <div className="mt-12 space-y-8">
        {Object.keys(signatureProps.personal).map((key) => {
          const input =
            dictionary.inputs[key as keyof SignatureProps['personal']];
          return (
            <FormField name={`personal${key}`}>
              <FormLabel>{input.label}</FormLabel>
              <FormInput
                type="text"
                value={
                  signatureProps.personal[
                    key as keyof SignatureProps['personal']
                  ]
                }
                placeholder={input.placeholder}
                onChange={(e) => {
                  setField(
                    'personal',
                    key as keyof SignatureProps['personal'],
                    e.target.value
                  );
                }}
              />
            </FormField>
          );
        })}
      </div>
    </Tabs.Content>
  );
};
