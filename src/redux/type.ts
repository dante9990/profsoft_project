import { ActionState } from "../types/auth";
import { CertificateState } from "../types/cert";

export type RootState = {
  auth: ActionState;
};

export type RootStateCertificate = {
  cert: CertificateState;
};
