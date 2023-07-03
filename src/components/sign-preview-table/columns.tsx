'use client';

import { Signature } from '@/lib/models/signature';
import { ColumnDef } from '@tanstack/react-table';
import { WithId } from 'mongodb';

export const columns: ColumnDef<WithId<Signature>>[] = [
  {
    accessorKey: '_id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
];
