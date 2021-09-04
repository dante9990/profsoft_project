export interface CertData {
  id: number;
  number: string;
  fullName: any;
  direction: string;
  dateFinish: string;
  dateStart: string;
  features: any;
  isShow: boolean;
}

type UseCertType = {
  certDataAll(): Promise<CertData>;
};

// @ts-ignore
function getCertData({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: any): Promise<CertData> {
  return new Promise<CertData>((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: id,
          number: number,
          fullName: fullName,
          direction: direction,
          dateFinish: dateFinish,
          dateStart: dateStart,
          features: features,
          isShow: isShow,
        }),
      0
    );
  });
}

export const useCert = ({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: CertData): UseCertType => {
  const certDataAll = async () => {
    const result = await getCertData({
      id,
      number,
      fullName,
      direction,
      dateFinish,
      dateStart,
      features,
      isShow,
    });
    return result;
  };
  return {
    certDataAll,
  };
};
