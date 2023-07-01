import { CreateSignature } from '@/components/create-signature';
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

  if (!dictionary) {
    return <div>Dictionary not found</div>;
  }

  return (
    <>
      <div>
        <LocaleSwitcher />
        <p>Current locale: {dictionary.builder.forms.layout.description}</p>
        <CreateSignature />
      </div>
    </>
  );
}
