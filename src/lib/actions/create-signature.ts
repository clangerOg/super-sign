'use client';

import axios from 'axios';
import { defaultSignatureValues } from '../utils';

async function createNewSignature() {
  const singature = defaultSignatureValues;

  const response = await axios({
    url: '/api/signatures/create',
    method: 'POST',
    data: JSON.stringify(singature),
  });

  if (response.status !== 200)
    throw new Error('Error while creating new signature');

  console.log(response.data);
}
