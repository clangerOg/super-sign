export type Dictionary = {
  components: {
    signaturePreviewCard: {
      createdAt: string;
      shareBtn: string;
      editBtn: string;
    };
  };
  dashboard: {
    signatures: {
      title: string;
      create: {
        title: string;
        description: string;
      };
    };
  };
  builder: {
    forms: {
      layout: {
        title: string;
        description: string;
      };
      personal: {
        title: string;
        description: string;
        inputs: {
          firstName: {
            label: string;
            placeholder: string;
          };
          lastName: {
            label: string;
            placeholder: string;
          };
          website: {
            label: string;
            placeholder: string;
          };
          adress: {
            label: string;
            placeholder: string;
          };
          phone: {
            label: string;
            placeholder: string;
          };
          mail: {
            label: string;
            placeholder: string;
          };
        };
      };
      business: {
        title: string;
        description: string;
        inputs: {
          name: {
            label: string;
            placeholder: string;
          };
          adress: {
            label: string;
            placeholder: string;
          };
          website: {
            label: string;
            placeholder: string;
          };
          mail: {
            label: string;
            placeholder: string;
          };
          phone: {
            label: string;
            placeholder: string;
          };
          department: {
            label: string;
            placeholder: string;
          };
          jobDescription: {
            label: string;
            placeholder: string;
          };
          additionalInformation: {
            label: string;
            placeholder: string;
          };
        };
      };
    };
  };
};
