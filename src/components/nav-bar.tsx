import { cn } from '@/lib/utils';
import { Home } from 'lucide-react';
import Link from 'next/link';
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
      className={cn(
        'fixed bottom-0 w-full border-t border-l-slate-100 bg-slate-50 p-6',
        className
      )}
    >
      <ul className="flex items-center justify-around">
        <li>
          <Link href={'/'}>
            <Home />
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <Home />
          </Link>
        </li>
      </ul>
    </div>
  );
});

NavBar.displayName = 'NavBar';
