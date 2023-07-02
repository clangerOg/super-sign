'use client';

import * as Tabs from '@radix-ui/react-tabs';
import { RefAttributes, forwardRef } from 'react';

type BuilderSidebarProps = Tabs.TabsProps & RefAttributes<HTMLDivElement>;

type BuilderSidebarElement = HTMLDivElement;

export const BuilderSidebar: React.ForwardRefExoticComponent<BuilderSidebarProps> =
  forwardRef<BuilderSidebarElement, BuilderSidebarProps>((props, ref) => {
    const { className, children, ...other } = props;

    return (
      <Tabs.Root
        id="sidebar"
        {...other}
        ref={ref}
        className="flex w-full max-w-md flex-row bg-yellow-300"
      >
        {children}
      </Tabs.Root>
    );
  });
