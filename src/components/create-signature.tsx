'use client';

import { defaultSignatureValues } from '@/lib/utils';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

export const CreateSignature: React.FC = () => {
  const { toast } = useToast();
  const router = useRouter();

  const createSignature = async () => {
    try {
      const singature = defaultSignatureValues;

      const response = await axios({
        url: '/api/signatures/create',
        method: 'POST',
        data: JSON.stringify(singature),
      });

      console.log('response:', response);

      toast({
        title: 'Signature created',
        description: 'Your new signature was created successfully',
        duration: 5000,
        type: 'foreground',
      });

      console.log('data', response.data.result.insertedId);

      const id = response.data.result.insertedId;

      router.push(`/signatures/${id}`);
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

  return <Button onClick={createSignature}>Click me</Button>;
};
