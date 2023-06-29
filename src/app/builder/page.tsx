import { BuilderTabs } from '@/components/builder-tabs';
import { Canvas } from '@/components/canvas';
import { BuilderBusinessForm } from '@/components/forms/builder-business-form';
import { BuilderPersonalForm } from '@/components/forms/builder-personal-form';
import { MailPreview } from '@/components/mail-preview';
import { SideBar } from '@/components/side-bar';
import { SignatureLayout } from '@/components/signatures/layout-1';

export default async function Page() {
  return (
    <div className="flex flex-row ">
      <SideBar>
        <BuilderTabs>
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
