import { Container } from '@/components/container';
import { CreateSignature } from '@/components/create-signature';
import { SignaturePreviewGrid } from '@/components/lobby/signature-preview-grid';
import { Shell } from '@/components/shell';
import { columns } from '@/components/sign-preview-table/columns';
import { PreviewTable } from '@/components/sign-preview-table/preview-table';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getDictionary } from '@/lib/get-dictionary';
import { Signature, getManySignatures } from '@/lib/models/signature';
import { GridIcon, ListIcon } from 'lucide-react';
import { WithId } from 'mongodb';
import { Locale } from '../../../../i18n-config';

type PageProps = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: PageProps) {
  const dictionary = await getDictionary(lang);

  if (!dictionary) return <>Loading</>;

  const signatures: WithId<Signature>[] = await getManySignatures();

  return (
    <>
      <Shell className="mt-6">
        <Container className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">
            {dictionary['dashboard']['signatures'].title}
          </h2>
        </Container>
        <Tabs defaultValue="grid" className="w-full">
          <Container className="mt-12 flex items-center justify-between">
            <Input
              type="text"
              className="max-w-xs"
              placeholder="Search signatures..."
            />
            <div className="flex items-center justify-center gap-6">
              <TabsList>
                <TabsTrigger value="grid">
                  <GridIcon size={20} />
                </TabsTrigger>
                <TabsTrigger value="list">
                  <ListIcon size={20} />
                </TabsTrigger>
              </TabsList>

              <CreateSignature />
            </div>
          </Container>

          <Container className="mt-6">
            <SignaturePreviewGrid
              signatures={signatures}
              dictionary={dictionary['components']}
            />
            <TabsContent value="list">
              <PreviewTable columns={columns} data={signatures} />
            </TabsContent>
          </Container>
        </Tabs>
      </Shell>
      {/** 
      <Shell className="mt-24">
        <Container>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            {dictionary['dashboard']['signatures'].title}
          </h2>
        </Container>
        <Container className="mt-8 grid grid-cols-3 gap-8">
          {signatures.map((signature) => {
            return (
              <SignaturePreviewCard
                key={`sign-${signature._id.toString()}`}
                dictionary={dictionary['components']['signaturePreviewCard']}
                signature={signature}
              />
            );
          })}
          <CreateSignature />
        </Container>
      </Shell>*/}
    </>
  );
}
