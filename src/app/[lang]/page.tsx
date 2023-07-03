import { Container } from '@/components/container';
import { CreateSignature } from '@/components/create-signature';
import { Shell } from '@/components/shell';
import { SignaturePreviewCard } from '@/components/signature-preview-card';
import { getDictionary } from '@/lib/get-dictionary';
import { Signature, getManySignatures } from '@/lib/models/signature';
import { WithId } from 'mongodb';
import { Locale } from '../../../i18n-config';

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
      </Shell>
    </>
  );
}
