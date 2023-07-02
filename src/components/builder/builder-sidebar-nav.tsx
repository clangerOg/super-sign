'use client';

import { cn } from '@/lib/utils';
import * as Tabs from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

type BuilderSidebarNavItem = {
  icon: React.ReactNode;
  value: string;
};

type BuilderSidebarNavProps = ComponentPropsWithoutRef<'div'> & {
  items: BuilderSidebarNavItem[];
};

type BuilderSidebarNavElement = HTMLDivElement;

export const BuilderSidebarNav: React.ForwardRefExoticComponent<BuilderSidebarNavProps> =
  forwardRef<BuilderSidebarNavElement, BuilderSidebarNavProps>((props, ref) => {
    const { className, items, ...other } = props;

    return (
      <div
        {...other}
        ref={ref}
        className={cn(
          'h-full w-fit shrink-0 border-r border-slate-200 bg-slate-50 p-6'
        )}
      >
        <Tabs.List className="flex list-none flex-col space-y-6">
          {items.map((item, index) => {
            return (
              <Tabs.Trigger
                value={item.value}
                key={index}
                className="rounded-md bg-transparent p-3 text-slate-400 data-[state=active]:bg-slate-100 data-[state=active]:text-slate-500"
              >
                {item.icon}
              </Tabs.Trigger>
            );
          })}
        </Tabs.List>
      </div>
    );
  });
