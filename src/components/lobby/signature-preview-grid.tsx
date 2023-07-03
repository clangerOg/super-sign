import { Dictionary } from '@/dictionaries/types';
import { Signature } from '@/lib/models/signature';
import { WithId } from 'mongodb';
import { forwardRef } from 'react';
import { TabsContent } from '../ui/tabs';
import { SignaturePreviewCard } from './signature-preview-card';

type SignaturePreviewGridElement = React.ElementRef<'div'>;

type SignaturePreviewGridProps = ComponentPropsWithoutRef<'div'> & {
  signatures: WithId<Signature>[];
  dictionary: Dictionary['components'];
};

export const SignaturePreviewGrid: React.ForwardRefExoticComponent<SignaturePreviewGridProps> =
  forwardRef<SignaturePreviewGridElement, SignaturePreviewGridProps>(
    (props, ref) => {
      const { signatures, dictionary, ...other } = props;

      return (
        <TabsContent
          {...other}
          ref={ref}
          value="grid"
          className="grid w-full grid-cols-3 gap-8"
        >
          {signatures.map((signature, index) => {
            return (
              <SignaturePreviewCard
                signature={signature}
                key={`prvw-grid-${index}`}
                dictionary={dictionary['signaturePreviewCard']}
              />
            );
          })}
        </TabsContent>
      );
    }
  );
SignaturePreviewGrid.displayName = 'SignaturePreviewGrid';
