import { Container } from '@/components/container';
import { Shell } from '@/components/shell';
import { BookmarkPlus } from 'lucide-react';

export default function Page() {
  return (
    <>
      <Shell className="mt-24">
        <Container>
          <p className="text-3xl font-medium text-slate-900">
            Deine Signaturen
          </p>
        </Container>
        <Container className="mt-8 grid grid-cols-3">
          <div className="group flex h-72 cursor-pointer flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-slate-200 transition-colors hover:border-blue-600 hover:bg-slate-50">
            <div className="flex flex-col items-center justify-center p-6">
              <BookmarkPlus size={32} className="text-blue-600" />

              <p className="mt-6 text-base font-semibold text-slate-900 group-hover:text-blue-600">
                Neue Signatur
              </p>
              <p className="mt-2 text-center text-sm text-slate-500">
                Füge eine neue Signatur hinzu um deinen Emails einen
                persönlichen Touch zu verleihen.
              </p>
            </div>
          </div>
        </Container>
      </Shell>
    </>
  );
}
