'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { FormField, FormInput, FormLabel } from '../form';
import { Input } from '../ui/input';

type BuilderPersonalFormProps = {
  dictionary: {
    title: string;
    description: string;
    inputs: {
      firstName: {
        label: string;
        placeholder: string;
      };
      lastName: {
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
        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {dictionary.inputs.firstName.label}
          </p>
          <Input
            type="text"
            value={signatureProps.personal.firstName}
            placeholder={dictionary.inputs.firstName.placeholder}
            onChange={(e) => {
              setField('personal', 'firstName', e.target.value);
            }}
          />
        </div>

        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {dictionary.inputs.lastName.label}
          </p>
          <Input
            type="text"
            placeholder={dictionary.inputs.lastName.placeholder}
            value={signatureProps.personal.lastName}
            onChange={(e) => {
              setField('personal', 'lastName', e.target.value);
            }}
          />
        </div>
        <FormField name="textValueesfse">
          <FormLabel>Hello World</FormLabel>
          <FormInput type="text" />
        </FormField>
      </div>
    </Tabs.Content>
  );
};
