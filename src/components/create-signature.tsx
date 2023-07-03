'use client';

import { CreateSignatureApiBody } from '@/app/api/signature/create/route';
import { Signature } from '@/lib/models/signature';
import { defaultSignatureValues } from '@/lib/utils';
import axios from 'axios';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, buttonVariants } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

export const CreateSignature: React.FC = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [title, setTitle] = useState<string>('');

  const createNewSignature = async () => {
    try {
      const bodyData: Signature = {
        title: title,
        createdAt: Date.now(),
        configuration: defaultSignatureValues,
        settings: {
          public: true,
        },
      };

      const body: CreateSignatureApiBody = {
        data: bodyData,
      };

      const response = await axios({
        url: '/api/signature/create',
        method: 'POST',
        data: JSON.stringify(body),
      });

      console.log('response:', response);

      toast({
        title: 'Signature created',
        description: 'Your new signature was created successfully',
        duration: 5000,
        type: 'foreground',
      });

      console.log('data', response.data.response.insertedId);

      const id = response.data.response.insertedId;

      router.push(`/s/${id}/builder`);
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
    <Dialog>
      <DialogTrigger className={buttonVariants({ variant: 'default' })}>
        New Signature
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new signature</DialogTitle>
          <DialogDescription>
            Create a new signature to start your journey with us
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Signature title
            </Label>
            <Input
              id="name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My new Signature"
              className="mt-2"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" className="gap-4" onClick={createNewSignature}>
            Create Signature
            <Plus size={18} />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
