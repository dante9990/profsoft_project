import { ActionState } from "../types/auth";
import { CertificateState } from "../types/cert";
import { SelectState } from "../types/select";

export type RootState = {
  auth: ActionState;
};

export type RootStateCertificate = {
  cert: CertificateState;
};

export type RootStateSelect = {
  select: SelectState;
};
