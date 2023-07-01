'use client';

import { useToast } from '@/components/ui/use-toast';
import axios from 'axios';
import { defaultSignatureValues } from '../utils';

export async function createNewSignature() {
  const singature = defaultSignatureValues;

  const response = await axios({
    url: '/api/signatures/create',
    method: 'POST',
    data: JSON.stringify(singature),
  });

  if (response.status !== 200)
    throw new Error('Error while creating new signature');

  const { toast } = useToast();

  toast({
    title: 'Signature created',
    description: 'Your new signature was created successfully',
    duration: 5000,
    type: 'foreground',
  });

  console.log(response.data);
}
