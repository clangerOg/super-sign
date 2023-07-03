import { Dictionary } from '@/dictionaries/types';
import { Signature } from '@/lib/models/signature';
import { WithId } from 'mongodb';
import Link from 'next/link';
import { forwardRef } from 'react';
import { buttonVariants } from '../ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type SignaturePreviewCardProps = ComponentPropsWithoutRef<'div'> & {
  signature: WithId<Signature>;
  dictionary: Dictionary['components']['signaturePreviewCard'];
};

export const SignaturePreviewCard: React.ForwardRefExoticComponent<SignaturePreviewCardProps> =
  forwardRef<HTMLDivElement, SignaturePreviewCardProps>((props, ref) => {
    const { className, signature, dictionary, ...other } = props;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">{signature.title}</CardTitle>
          <CardDescription>
            {signature.description ? signature.description : '...'}
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="flex flex-row justify-between gap-2">
          <p className="text-sm text-slate-600">Last edited 2 days ago</p>

          <DropdownMenu>
            <DropdownMenuTrigger
              className={buttonVariants({
                variant: 'outline',
                size: 'sm',
              })}
            >
              {dictionary['actionBtn']}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href={`/s/${signature._id}/builder`}>
                <DropdownMenuItem>Bearbeiten</DropdownMenuItem>
              </Link>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardFooter>
      </Card>
    );
  });
SignaturePreviewCard.displayName = 'SignaturePreviewCard';
