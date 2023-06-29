import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type ContainerProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  'ref'
>;

export const Container: React.ForwardRefExoticComponent<ContainerProps> =
  forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
    const { className, children, ...other } = props;

    return (
      <div
        {...other}
        ref={ref}
        className={cn('container relative mx-auto max-w-6xl px-6', className)}
      >
        {children}
      </div>
    );
  });
Container.displayName = 'Container';
