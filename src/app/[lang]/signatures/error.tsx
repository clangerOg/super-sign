'use client';

import { Container } from '@/components/container';
import { Shell } from '@/components/shell';
import { Button } from '@/components/ui/button';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error(props: ErrorProps) {
  const { error, reset } = props;

  return (
    <Shell className="min-h-screen">
      <Container>
        <p className="text-center text-4xl font-semibold text-slate-900">
          An unexpected error ocurred.
        </p>
        <p className="mt-6 text-center text-base text-slate-500">
          {error.message}
        </p>

        <div className="mt-12 flex w-full items-center justify-center gap-8">
          <Button onClick={reset}>Try again</Button>
          <Button onClick={() => window.history.back()} variant={'outline'}>
            Go back
          </Button>
        </div>
      </Container>
    </Shell>
  );
}
