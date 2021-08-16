import { FC, ReactElement, useReducer, useState } from "react";

import {
  CertificateContext,
  CertificateContextType,
  Certificate,
} from "./certificate";
interface Props {
  children: ReactElement;
}

const initialValue: CertificateContextType = {
  isShow: false,
  certificate: {
    id: 0,
    number: "",
    features: [],
    dateStart: "",
    direction: "",
    dateFinish: "",
    fullName: "",
  },
};

interface Action {
  type: string;
  value: Certificate;
}
const reduce = (state: CertificateContextType, action: Action) => {
  switch (action.type) {
    case "fillData": {
      return { ...state, isShow: true, certificate: action.value };
    }
    case "hide": {
      return { ...state, isShow: false };
    }
    default:
      return state;
  }
};
export const CertificateWrapper: FC<Props> = ({ children }: Props) => {
  const [certificate, dispatch] = useReducer(reduce, initialValue); // в редьюс-первый аргумент-certificate, второй-аргумент из dispatch

  const fillData = (data: Certificate) => {
    dispatch({ type: "fillData", value: data });
  };
  const hideCert = () => {
    dispatch({ type: "hide", value: initialValue.certificate });
  };
  return (
    <CertificateContext.Provider
      value={{
        certificate: certificate.certificate,
        isShow: certificate.isShow,
        fillData,
        hideCert,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};
