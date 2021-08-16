import { createContext } from "react";

interface Feature {
  id: number;
  name: string;
}
export interface Certificate {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateStart: string;
  dateFinish: string;
  features: Feature[];
}

export interface CertificateContextType {
  certificate: Certificate;
  isShow: boolean;
}

type CertificateContextTypeWithToggle = {
  fillData(certificate: Certificate): void;
  hideCert(): void;
} & CertificateContextType;

const toggle = (certificate: Certificate) => {
  console.log(certificate);
};
const hideCert = () => {
  console.log("ss");
};
export const CertificateContext =
  createContext<CertificateContextTypeWithToggle>({
    certificate: {
      id: 0,
      number: "",
      features: [],
      dateStart: "",
      direction: "",
      dateFinish: "",
      fullName: "",
    },
    isShow: false,
    fillData: toggle,
    hideCert,
  });
