import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { forwardRef } from 'react';
import { Container } from './container';
import { buttonVariants } from './ui/button';

type NavBarElement = React.ElementRef<'div'>;

type NavBarProps = ComponentPropsWithoutRef<'div'> & {};

export const NavBar: React.FC<NavBarProps> = forwardRef<
  NavBarElement,
  NavBarProps
>((props, ref) => {
  const { className, ...other } = props;

  return (
    <nav
      {...other}
      ref={ref}
      className={cn(
        'sticky top-0 z-30 flex w-full flex-col items-center justify-center border-b bg-white',
        className
      )}
    >
      <Container className="py-6">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            <p>Super Sign</p>
          </div>

          <ul className="flex flex-row items-center">
            <li>
              <Link
                href={'/new'}
                className={buttonVariants({ variant: 'default' })}
              >
                New Signture
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
});

NavBar.displayName = 'NavBar';
