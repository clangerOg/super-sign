import { cn } from '@/lib/utils';
import React, { forwardRef } from 'react';

type NavBarElement = React.ElementRef<'div'>;

type NavBarProps = ComponentPropsWithoutRef<'div'> & {};

export const NavBar: React.FC<NavBarProps> = forwardRef<
  NavBarElement,
  NavBarProps
>((props, ref) => {
  const { className, ...other } = props;

  return (
    <div
      ref={ref}
      {...other}
      className={cn('sticky top-0 w-full border-b p-6', className)}
    ></div>
  );
});

NavBar.displayName = 'NavBar';
