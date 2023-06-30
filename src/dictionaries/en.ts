export default {
  dashboard: {
    signatures: {
      title: 'Your Signatures',
      create: {
        title: 'New Signature',
        description:
          'Add a new signature to give a personal touch to your emails.',
      },
    },
  },
  builder: {
    forms: {
      layout: {
        title: 'Layout',
        description: 'Choose a Layout that fits you needs.',
      },
      personal: {
        title: 'Personal Information',
        description: 'Add your personal information.',
        inputs: {
          firstName: {
            label: 'First Name',
            placeholder: 'John',
          },
          lastName: {
            label: 'Last Name',
            placeholder: 'Doe',
          },
        },
      },
      business: {
        title: 'Business Information',
        description: 'Add information about your business or company.',
        inputs: {
          name: {
            label: 'Name',
            placeholder: 'John Doe Inc.',
          },
        },
      },
    },
  },
} as const;
