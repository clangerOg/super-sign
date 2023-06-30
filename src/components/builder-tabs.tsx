'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { LayoutDashboard, Paintbrush, Store, UserCircle } from 'lucide-react';
import React, { forwardRef } from 'react';
import { FormRoot } from './form';

type BuilderTabsProps = Tabs.TabsProps & React.RefAttributes<HTMLDivElement>;

const tabs: {
  value: string;
  icon: React.ReactNode;
}[] = [
  {
    value: 'layout',
    icon: <LayoutDashboard />,
  },
  {
    value: 'personal',
    icon: <UserCircle />,
  },
  {
    value: 'business',
    icon: <Store />,
  },
  {
    value: 'design',
    icon: <Paintbrush />,
  },
];

export const BuilderTabs: React.ForwardRefExoticComponent<BuilderTabsProps> =
  forwardRef<HTMLDivElement, BuilderTabsProps>((props, ref) => {
    const { children, ...other } = props;

    return (
      <Tabs.Root ref={ref} {...other} defaultValue={tabs[0].value}>
        <div className="h-full w-full px-6 py-12">
          <FormRoot> {children}</FormRoot>
        </div>

        <div className="fixed bottom-0 flex w-full max-w-sm items-center justify-between border-t border-inherit p-6">
          <Tabs.List className="flex w-full justify-around gap-4">
            {tabs.map((tab, index) => (
              <Tabs.Trigger
                value={tab.value}
                className="group"
                key={`tabs-${index}`}
              >
                <div className="rounded-lg bg-white p-3 text-slate-500 group-data-[state=active]:bg-slate-100 group-data-[state=active]:text-blue-600">
                  {tab.icon}
                </div>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
        </div>
      </Tabs.Root>
    );
  });

BuilderTabs.displayName = 'BuilderTabs';
