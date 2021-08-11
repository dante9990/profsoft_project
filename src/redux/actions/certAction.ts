export const GET_CERTIFICATE = "GET_CERTIFICATE";
export const DELETE_CERTIFICATE = "DELETE_CERTIFICATE";
export const CHANGE_CERTIFICATE_FLAG = "CHANGE_CERTIFICATE_FLAG";

export type Action = {
  type: string;
};

export type CertificateAction = {
  number: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
  isShow: boolean;
} & Action;

interface Feature {
  id: number;
  name: string;
}

type CertificateProps = {
  number: number;
  fullName: string;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
  isShow?: boolean;
};

export const getCertificateAction = ({
  number,
  fullName,
  dateFinish,
  dateStart,
  direction,
  features,
}: CertificateProps) => {
  return {
    type: GET_CERTIFICATE,
    number,
    fullName,
    dateFinish,
    dateStart,
    direction,
    features,
  };
};

export const changeFlagAction = ({
  number,
  fullName,
  dateFinish,
  dateStart,
  direction,
  features,
  isShow,
}: CertificateProps) => {
  return {
    type: CHANGE_CERTIFICATE_FLAG,
    number,
    fullName,
    dateFinish,
    dateStart,
    direction,
    features,
    isShow,
  };
};

export const deleteCertificateAction = () => {
  return {
    type: DELETE_CERTIFICATE,
    number: 0,
    fullName: "",
    dateFinish: "",
    dateStart: "",
    direction: "",
    features: [
      { id: 0, name: "" },
      { id: 1, name: "" },
      { id: 2, name: "" },
    ],
  };
};
