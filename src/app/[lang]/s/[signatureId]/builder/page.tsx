import { MailPreview } from '@/components/mail-preview';
import { SignatureLayout } from '@/components/signatures/layout-1';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '../../../../../../i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <MailPreview>
        <SignatureLayout />
      </MailPreview>
    </>
  );
}
