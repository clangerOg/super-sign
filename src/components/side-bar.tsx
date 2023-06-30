'use client';

import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type SideBarElement = React.ElementRef<'div'>;

type SideBarProps = ComponentPropsWithoutRef<'div'> & {};

export const SideBar: React.FC<SideBarProps> = forwardRef<
  SideBarElement,
  SideBarProps
>((props, ref) => {
  const { className, children, ...other } = props;

  return (
    <div
      ref={ref}
      {...other}
      className={cn(
        'relative h-screen min-h-screen w-full max-w-sm overflow-y-scroll border-r border-slate-200',
        className
      )}
    >
      {children}
    </div>
  );
});

SideBar.displayName = 'SideBar';
