'use client';

import { UpdateSignatureApiBody } from '@/app/api/signature/update/route';
import { useSignatureContext } from '@/lib/context/signature-context';
import { Signature } from '@/lib/models/signature';
import { cn } from '@/lib/utils';
import axios from 'axios';
import { forwardRef } from 'react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type BuilderNavbarProps = ComponentPropsWithoutRef<'div'>;

type BuilderNavbarElement = HTMLDivElement;

export const BuilderNavbar: React.ForwardRefExoticComponent<BuilderNavbarProps> =
  forwardRef<BuilderNavbarElement, BuilderNavbarProps>((props, ref) => {
    const { className, ...other } = props;

    const { signatureProps, signatureId } = useSignatureContext();
    const { toast } = useToast();

    const updateSignature = async () => {
      try {
        const bodyData: Signature = {
          title: 'SOME TITLE',
          createdAt: Date.now(),
          configuration: signatureProps,
          settings: {
            public: true,
          },
        };

        const body: UpdateSignatureApiBody = {
          data: {
            _id: signatureId,
            update: bodyData,
          },
        };

        const response = await axios({
          url: '/api/signature/update',
          method: 'PUT',
          data: JSON.stringify(body),
        });

        console.log('response:', response);

        toast({
          title: 'Signature updated',
          description: 'Your new signature was updated successfully',
          duration: 5000,
          type: 'foreground',
        });

        console.log('data', response.data.response.insertedId);

        const id = response.data.response.insertedId;
      } catch (error) {
        console.log(error);
        toast({
          title: 'Error while creating new signature',
          description: `Please try again later ${error}`,
          duration: 5000,
          variant: 'destructive',
        });
      }
    };

    return (
      <nav
        {...other}
        ref={ref}
        className={cn(
          'break-words border-b border-slate-200 bg-white px-6 py-4',
          className
        )}
      >
        <Button onClick={updateSignature}>Save</Button>
      </nav>
    );
  });
