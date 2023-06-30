'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { FormField, FormInput, FormLabel } from '../form';

type BuilderBusinessFormProps = {
  dictionary: {
    title: string;
    description: string;
    inputs: {
      [key in keyof SignatureProps['business']]: {
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

  const { setField, signatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="business">
      <p className="text-lg font-semibold text-slate-900">{dictionary.title}</p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        {dictionary.description}
      </p>
      <div className="mt-12 space-y-8">
        {Object.keys(signatureProps.business).map((key) => {
          const input =
            dictionary.inputs[key as keyof SignatureProps['business']];
          return (
            <FormField name={`business${key}`}>
              <FormLabel>{input.label}</FormLabel>
              <FormInput
                type="text"
                value={
                  signatureProps.business[
                    key as keyof SignatureProps['business']
                  ]
                }
                placeholder={input.placeholder}
                onChange={(e) => {
                  setField(
                    'business',
                    key as keyof SignatureProps['business'],
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
