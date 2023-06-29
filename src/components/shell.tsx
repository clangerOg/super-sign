import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type ShellProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>;

export const Shell: React.ForwardRefExoticComponent<ShellProps> = forwardRef<
  HTMLDivElement,
  ShellProps
>((props, ref) => {
  const { className, children, ...other } = props;

  return (
    <section
      {...other}
      ref={ref}
      className={cn(
        'relative flex flex-col items-center justify-center',
        className
      )}
    >
      {children}
    </section>
  );
});
Shell.displayName = 'Shell';
