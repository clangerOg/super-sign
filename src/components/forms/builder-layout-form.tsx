'use client';

import { useSignatureContext } from '@/lib/context/signature-context';
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';

import Image from 'next/image';
import Layout1 from '../../../public/images/singature-layout-1.png';

type Props = {};

export const BuilderLayoutForm: React.FC<Props> = (props) => {
  const { setField, signatureProps } = useSignatureContext();

  return (
    <Tabs.Content value="layout">
      <p className="text-lg font-semibold text-slate-900">Layout</p>
      <p className="mt-2 text-sm font-normal text-slate-500">
        Wähle ein Layout, das am besten zu dir passt.
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
