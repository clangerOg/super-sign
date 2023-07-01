'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import { Dictionary } from '@/dictionaries/types';
import Image from 'next/image';
import Layout1 from '../../../public/images/singature-layout-1.png';

type BuilderLayoutFormProps = {
  dictionary: Dictionary['builder']['forms']['layout'];
};

export const BuilderLayoutForm: React.FC<BuilderLayoutFormProps> = (props) => {
  const { dictionary } = props;

  const { setField, signatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="layout">
      <p className="text-lg font-semibold text-slate-900">{dictionary.title}</p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        {dictionary.description}
      </p>
      <div className="mt-12 flex flex-col items-center justify-center gap-8 space-y-8">
        <Image
          src={Layout1}
          alt="Layout 1"
          className="w-2/3 rounded-lg border border-slate-200"
        />
      </div>
    </Tabs.Content>
  );
};
