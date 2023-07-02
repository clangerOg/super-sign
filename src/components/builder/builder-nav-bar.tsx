import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { Button } from '../ui/button';

type BuilderNavbarProps = ComponentPropsWithoutRef<'div'>;

type BuilderNavbarElement = HTMLDivElement;

export const BuilderNavbar: React.ForwardRefExoticComponent<BuilderNavbarProps> =
  forwardRef<BuilderNavbarElement, BuilderNavbarProps>((props, ref) => {
    const { className, ...other } = props;

    return (
      <nav
        {...other}
        ref={ref}
        className={cn(
          'break-words border-b border-slate-200 bg-white px-6 py-4',
          className
        )}
      >
        <Button>Save</Button>
      </nav>
    );
  });
