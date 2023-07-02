import { BuilderNavbar } from '@/components/builder/builder-nav-bar';
import { BuilderSidebar } from '@/components/builder/builder-sidebar';
import { BuilderSidebarContent } from '@/components/builder/builder-sidebar-content';
import { BuilderSidebarNav } from '@/components/builder/builder-sidebar-nav';
import { BuilderBusinessForm } from '@/components/forms/builder-business-form';
import { BuilderPersonalForm } from '@/components/forms/builder-personal-form';
import { getDictionary } from '@/lib/get-dictionary';
import {
  LayoutDashboardIcon,
  PaintbrushIcon,
  StoreIcon,
  UserCircleIcon,
} from 'lucide-react';
import { Locale } from '../../../../../../i18n-config';

export default async function BuilderLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: {
    lang: Locale;
  };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <>
      <div className="hidden h-screen w-screen flex-col bg-white lg:flex">
        <div className="flex max-h-full w-full grow flex-row bg-red-400">
          <BuilderSidebar>
            <BuilderSidebarNav
              items={[
                {
                  icon: <LayoutDashboardIcon />,
                  value: 'layout',
                },
                {
                  icon: <UserCircleIcon />,
                  value: 'personal',
                },
                {
                  icon: <StoreIcon />,
                  value: 'business',
                },
                {
                  icon: <PaintbrushIcon />,
                  value: 'design',
                },
              ]}
            />
            <BuilderSidebarContent>
              <BuilderPersonalForm
                dictionary={dictionary['builder']['forms']['personal']}
              />
              <BuilderBusinessForm
                dictionary={dictionary['builder']['forms']['business']}
              />
            </BuilderSidebarContent>
          </BuilderSidebar>
          <div className="flex w-full flex-col">
            <BuilderNavbar />

            <div className="flex grow items-center justify-center bg-slate-100">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className=" flex h-screen w-full flex-col items-center justify-center bg-white px-6 lg:hidden">
        <p className="text-center text-3xl font-semibold text-slate-900">
          Sorry, your screen is to small!
        </p>
        <p className="mt-6 max-w-prose text-center text-slate-500">
          This editor is only available on larger screen sizes. Please open this
          link on your Dekstop again to edit the signature.
        </p>
      </div>
    </>
  );
}
