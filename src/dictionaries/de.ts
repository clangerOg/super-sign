export default {
  components: {
    signaturePreviewCard: {
      createdAt: 'Erstellt am',
      shareBtn: 'Teilen',
      editBtn: 'Bearbeiten',
    },
  },
  dashboard: {
    signatures: {
      title: 'Deine Signaturen',
      create: {
        title: 'Neue Signatur',
        description:
          'Füge eine neue Signatur hinzu um deinen Emails einen persönlichen Touch zu verleihen.',
      },
    },
  },
  builder: {
    forms: {
      layout: {
        title: 'Layout',
        description: 'Wähle eine Layout, dass am besten zu dir passt.',
      },
      personal: {
        title: 'Persönliche Informationen',
        description: 'Füge deine persönlichen Informationen hinzu.',
        inputs: {
          firstName: {
            label: 'Vorname',
            placeholder: 'Max',
          },
          lastName: {
            label: 'Nachname',
            placeholder: 'Mustermann',
          },
          website: {
            label: 'Webseite',
            placeholder: 'https://www.example.com',
          },
          adress: {
            label: 'Adresse',
            placeholder: 'Musterstraße 1, 12345 Musterstadt',
          },
          phone: {
            label: 'Telefonnummer',
            placeholder: '+49 123 456789',
          },
          mail: {
            label: 'Email',
            placeholder: 'hello@emxaple.com',
          },
        },
      },
      business: {
        title: 'Geschäftliche Informationen',
        description:
          'Füge Informationen über dein Unternehmen oder Arbeitgeber hinzu.',
        inputs: {
          name: {
            label: 'Unternehmensname',
            placeholder: 'Muster GmbH',
          },
          adress: {
            label: 'Adresse',
            placeholder: 'Musterstraße 1, 12345 Musterstadt',
          },
          website: {
            label: 'Webseite',
            placeholder: 'https://www.muster.de',
          },
          mail: {
            label: 'Email',
            placeholder: 'hello@muster.de',
          },
          phone: {
            label: 'Telefonnummer',
            placeholder: '+49 123 456789',
          },
          department: {
            label: 'Abteilung',
            placeholder: 'Vertrieb',
          },
          jobDescription: {
            label: 'Berufs Bezeichnung',
            placeholder: 'CEO',
          },
          additionalInformation: {
            label: 'Zusätzliche Informationen',
            placeholder: 'Zusätzliche Informationen',
          },
        },
      },
    },
  },
} as const;
