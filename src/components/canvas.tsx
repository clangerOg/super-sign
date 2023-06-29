import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type CanvasElement = React.ElementRef<'div'>;

type CanvasProps = ComponentPropsWithoutRef<'div'> & {};

export const Canvas: React.FC<CanvasProps> = forwardRef<
  CanvasElement,
  CanvasProps
>((props, ref) => {
  const { className, children, ...other } = props;

  return (
    <div
      ref={ref}
      {...other}
      className={cn(
        'relative flex min-h-screen grow items-center justify-center bg-slate-50',
        className
      )}
    >
      {children}
    </div>
  );
});

Canvas.displayName = 'Canvas';
