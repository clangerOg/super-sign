import LocaleSwitcher from '@/components/locale-switcher';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '../../../i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div>
        <LocaleSwitcher />
        <p>Current locale: {lang}</p>
      </div>
    </>
  );
}
