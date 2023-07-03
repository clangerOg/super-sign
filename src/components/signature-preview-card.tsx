import { Dictionary } from '@/dictionaries/types';
import { Signature } from '@/lib/models/signature';
import { cn } from '@/lib/utils';
import { LinkIcon, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { forwardRef } from 'react';
import { Button, buttonVariants } from './ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

type SignaturePreviewCardProps = ComponentPropsWithoutRef<'div'> & {
  signature: WithDocId<Signature>;
  dictionary: Dictionary['components']['signaturePreviewCard'];
};

export const SignaturePreviewCard: React.ForwardRefExoticComponent<SignaturePreviewCardProps> =
  forwardRef<HTMLDivElement, SignaturePreviewCardProps>((props, ref) => {
    const { className, signature, dictionary, ...other } = props;

    return (
      <Card
        {...other}
        ref={ref}
        className={cn(
          'break-words rounded-lg border border-slate-200',
          className
        )}
      >
        <CardHeader>
          <CardTitle>{signature.title}</CardTitle>
          <CardDescription>
            {dictionary.createdAt} {signature.createdAt && signature.createdAt}
          </CardDescription>
        </CardHeader>
        <CardFooter className="flex items-center justify-end gap-4">
          <Button variant={'outline'} className="gap-3">
            {dictionary.shareBtn}
            <LinkIcon size={16} className="text-slate-400" />
          </Button>
          <Link
            className={buttonVariants({
              variant: 'default',
              className: 'gap-3',
            })}
            href={`/s/${signature._id}/builder`}
          >
            {dictionary.editBtn}
            <Settings2 size={16} className="text-slate-300" />
          </Link>
        </CardFooter>
      </Card>
    );
  });
SignaturePreviewCard.displayName = 'SignaturePreviewCard';
