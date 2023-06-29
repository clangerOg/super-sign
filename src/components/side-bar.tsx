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
        'relative min-h-screen w-full max-w-sm border-r border-slate-200',
        className
      )}
    >
      {children}
      {/** 
      <div className="h-full w-full p-6">
        <div className="mb-8">
          <Progress value={0} />
        </div>
        <p className="text-lg font-semibold text-slate-900">Template</p>
        <p className="mt-2 text-sm font-normal text-slate-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime,
          laborum in. Animi officia explicabo quaerat voluptatibus placeat
        </p>
        <div className="mt-12">{children}</div>
      </div>

      <div className="fixed bottom-0 flex w-full max-w-sm items-center justify-between border-t border-inherit p-6">
        <div>
          <Button variant={'ghost'}>Zurück</Button>
        </div>
        <div>
          <Button>Weiter</Button>
        </div>
      </div>*/}
    </div>
  );
});

SideBar.displayName = 'SideBar';
