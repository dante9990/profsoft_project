export enum CertType {
  GETCERT = "GETCERT",
  DELETECERT = "DELETECERT",
  CHANGESHOW = "CHANGESHOW",
  IN_PROGRESS = "IN_PROGRESS",
}

interface GetCertActionType {
  type: CertType.GETCERT;
  payload: {
    id: number;
    number: string;
    fullName: any;
    direction: string;
    dateFinish: string;
    dateStart: string;
    features: any;
    isShow: boolean;
  };
}

interface DeleteCertActionType {
  type: CertType.DELETECERT;
  payload: boolean;
}

interface ChangeShowActionType {
  type: CertType.CHANGESHOW;
  payload: {
    id: number;
    number: string;
    fullName: any;
    direction: string;
    dateFinish: string;
    dateStart: string;
    features: any;
    isShow: boolean;
  };
}

interface StateActionType {
  type: CertType.IN_PROGRESS;
  payload: boolean;
}

export interface CertificateState {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateFinish: string;
  dateStart: string;
  features: any;
  isShow: boolean;
  in_progress: boolean;
}

export type ActionTypesCert =
  | GetCertActionType
  | DeleteCertActionType
  | ChangeShowActionType
  | StateActionType;
