export const GETCERT = "GETCERT";
export const DELCERT = "DELETECERT";
export const CHANGESHOW = "CHANGESHOW";

type Action = {
  type: string;
};

export type GetCertAction = {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateFinish: string;
  dateStart: string;
  features: any;
  isShow: boolean;
} & Action;

type GetcertProps = {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateFinish: string;
  dateStart: string;
  features: any;
  isShow: boolean;
};

export const getCertAction = ({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: GetcertProps) => {
  return {
    type: GETCERT,
    id,
    number,
    fullName,
    direction,
    dateFinish,
    dateStart,
    features,
    isShow,
  };
};

export const changeShowAction = ({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: GetcertProps) => {
  return {
    type: CHANGESHOW,
    id,
    number,
    fullName,
    direction,
    dateFinish,
    dateStart,
    features,
    isShow,
  };
};

export const deleteCertAction = () => {
  return {
    type: DELCERT,
  };
};
