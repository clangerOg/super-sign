import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setField<P, T extends keyof P>(
  object: P,
  topLevel: T,
  field: keyof P[T],
  value: P[typeof topLevel][typeof field]
) {
  object[topLevel][field] = value;
}
