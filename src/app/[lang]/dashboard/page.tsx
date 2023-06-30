import { Container } from '@/components/container';
import { Shell } from '@/components/shell';
import { getDictionary } from '@/lib/get-dictionary';
import { BookmarkPlus } from 'lucide-react';
import { Locale } from '../../../../i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Shell className="mt-24">
        <Container>
          <p className="text-3xl font-medium text-slate-900">
            {dictionary['dashboard']['signatures'].title}
          </p>
        </Container>
        <Container className="mt-8 grid grid-cols-3">
          <div className="group flex h-72 cursor-pointer flex-col items-center justify-center gap-8 rounded-lg border-2 border-dashed border-slate-200 transition-colors hover:border-blue-600 hover:bg-slate-50">
            <div className="flex flex-col items-center justify-center p-6">
              <BookmarkPlus size={32} className="text-blue-600" />

              <p className="mt-6 text-base font-semibold text-slate-900 group-hover:text-blue-600">
                {dictionary['dashboard']['signatures']['create'].title}
              </p>
              <p className="mt-2 text-center text-sm text-slate-500">
                {dictionary['dashboard']['signatures']['create'].description}
              </p>
            </div>
          </div>
        </Container>
      </Shell>
    </>
  );
}
