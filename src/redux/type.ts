export type AuthState = {
  login: string;
  name: string;
  token: string;
};

export type RootState = {
  auth: AuthState;
};

export type CertificateState = {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateFinish: string;
  dateStart: string;
  features: any;
  isShow: boolean;
};

export type RootStateCertificate = {
  cert: CertificateState;
};
