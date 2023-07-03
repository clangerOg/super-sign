'use client';

import { cn } from '@/lib/utils';
import * as Form from '@radix-ui/react-form';
import { RefAttributes, forwardRef } from 'react';

type BuilderSidebarContentProps = Form.FormProps &
  RefAttributes<HTMLFormElement>;

type BuilderSidebarContentElement = HTMLFormElement;

export const BuilderSidebarContent: React.ForwardRefExoticComponent<BuilderSidebarContentProps> =
  forwardRef<BuilderSidebarContentElement, BuilderSidebarContentProps>(
    (props, ref) => {
      const { className, children, ...other } = props;

      return (
        <div className="h-full max-h-full grow overflow-y-scroll border-r border-slate-200 bg-white p-6">
          <Form.Root {...other} ref={ref} className={cn('w-full', className)}>
            {children}
          </Form.Root>
        </div>
      );
    }
  );
BuilderSidebarContent.displayName = 'BuilderSidebarContent';
