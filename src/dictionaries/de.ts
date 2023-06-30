export default {
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
        },
      },
      business: {
        title: 'Geschäftliche Informationen',
        description:
          'Füge Informationen über dein Unternehmen oder Arbeitgeber hinzu.',
        inputs: {
          name: {
            label: 'Unternehmensname',
            placeholder: 'Max Mustermann GmbH',
          },
        },
      },
    },
  },
} as const;
