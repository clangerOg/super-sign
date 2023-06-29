'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { Input } from '../ui/input';

type Props = {};

export const BuilderBusinessForm: React.FC<Props> = (props) => {
  const { setField, signatureProps, setSignatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="business">
      <div className="space-y-8">
        <div>
          <p className="mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Unternehmen
          </p>
          <Input
            type="text"
            value={signatureProps.business.name}
            placeholder="Hello World"
            onChange={(e) => {
              setField('business', 'name', e.target.value);
            }}
          />
        </div>
      </div>
    </Tabs.Content>
  );
};
