import { cn } from '@/lib/utils';
import { Link, Paperclip, Send, SmilePlus, Underline } from 'lucide-react';
import React, { forwardRef } from 'react';
import { Button } from './ui/button';

type MailPreviewElement = React.ElementRef<'div'>;

type MailPreviewProps = ComponentPropsWithoutRef<'div'> & {};

export const MailPreview: React.FC<MailPreviewProps> = forwardRef<
  MailPreviewElement,
  MailPreviewProps
>((props, ref) => {
  const { className, children, ...other } = props;
  return (
    <div
      {...other}
      className={cn(
        'w-full max-w-3xl rounded-lg border border-slate-200 bg-white',
        className
      )}
    >
      <div className="flex items-center justify-start gap-2 rounded-t-lg bg-white p-4">
        <div className="aspect-square w-3 rounded-full bg-red-500" />
        <div className="aspect-square w-3 rounded-full bg-yellow-500" />
        <div className="aspect-square w-3 rounded-full bg-green-500" />
      </div>

      <div className="space-y-3 border-b border-inherit p-4">
        <div className="flex items-center gap-4">
          <p className="w-16 text-xs font-semibold text-slate-900">To:</p>
          <p className="w-full max-w-xs rounded bg-slate-50 px-2 py-1 text-xs text-slate-500">
            hello@world.com
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="w-16 text-xs font-semibold text-slate-900">Subject:</p>
          <p className="w-full max-w-xs rounded bg-slate-50 px-2 py-1 text-xs text-slate-500">
            I really need help
          </p>
        </div>
      </div>
      <div className="p-4 text-sm text-slate-500">
        {/**
        <p>
          Hello everybody,
          <br />
          I really fucked up. I deleted the entire mono repo.
          <br />
          <br />
          <br />
          <span className="rounded bg-slate-100 px-2 py-1 text-slate-600">
            ...
          </span>
          <br />
          <br />
          <br />
          Thanks a lot, Peter
        </p>
        */}

        <div className="my-8">{children}</div>
      </div>
      <div className="flex flex-row-reverse items-center gap-4 border-t border-slate-200 p-4 text-slate-500">
        <Button size={'sm'} className=" gap-2">
          Send
          <Send size={13} />
        </Button>
        <Button size={'sm'} variant={'outline'}>
          Save as Draft
        </Button>
        <Link size={18} />
        <Paperclip size={18} />
        <SmilePlus size={18} />
        <Underline size={18} />
      </div>
    </div>
  );
});
MailPreview.displayName = 'MailPreview';
