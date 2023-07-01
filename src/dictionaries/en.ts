export default {
  components: {
    signaturePreviewCard: {
      createdAt: 'Created at',
      shareBtn: 'Share',
      editBtn: 'Edit',
    },
  },
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
          website: {
            label: 'Website',
            placeholder: 'https://www.example.com',
          },
          adress: {
            label: 'Adress',
            placeholder: 'Example Street 1, 12345 Example City',
          },
          phone: {
            label: 'Phone Number',
            placeholder: '+49 123 456789',
          },
          mail: {
            label: 'Email',
            placeholder: 'hello@emxaple.com',
          },
        },
      },
      business: {
        title: 'Business Information',
        description: 'Add information about your business or company.',
        inputs: {
          name: {
            label: 'Company Name',
            placeholder: 'Example Inc.',
          },
          adress: {
            label: 'Adress',
            placeholder: 'Example Street 1, 12345 Example City',
          },
          website: {
            label: 'Website',
            placeholder: 'https://www.example.com',
          },
          mail: {
            label: 'Email',
            placeholder: 'hello@example.com',
          },
          phone: {
            label: 'Phone Number',
            placeholder: '+49 123 456789',
          },
          department: {
            label: 'Department',
            placeholder: 'Sales',
          },
          jobDescription: {
            label: 'Job Description',
            placeholder: 'CEO',
          },
          additionalInformation: {
            label: 'Additional Information',
            placeholder: 'Additional Information',
          },
        },
      },
    },
  },
} as const;
