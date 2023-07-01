export type Signature = {
  _id: string;
  createdAt: Date;
  title: string;
  configuration: SignatureProps;
  settings: {
    public: boolean;
  };
};
