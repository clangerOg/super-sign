import { BuilderTabs } from '@/components/builder-tabs';
import { Canvas } from '@/components/canvas';
import { BuilderBusinessForm } from '@/components/forms/builder-business-form';
import { BuilderLayoutForm } from '@/components/forms/builder-layout-form';
import { BuilderPersonalForm } from '@/components/forms/builder-personal-form';
import { MailPreview } from '@/components/mail-preview';
import { SideBar } from '@/components/side-bar';
import { SignatureLayout } from '@/components/signatures/layout-1';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '../../../../i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Page({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <div className="flex flex-row ">
      <SideBar>
        <BuilderTabs>
          <BuilderLayoutForm dictionary={dictionary.builder.forms.layout} />
          <BuilderBusinessForm />
          <BuilderPersonalForm />
        </BuilderTabs>
      </SideBar>
      <Canvas>
        <MailPreview>
          <SignatureLayout />
        </MailPreview>
      </Canvas>
    </div>
  );
}
