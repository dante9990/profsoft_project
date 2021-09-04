export interface SelectData {
  id1: number;
  id2: number;
  value1: string;
  value2: string;
  label1: string;
  label2: string;
  isShow: boolean;
}

type UseSelectType = {
  selectDataAll(): Promise<SelectData>;
};

// @ts-ignore
function getSelectData({
  id1,
  id2,
  value1,
  value2,
  label1,
  label2,
  isShow,
}: SelectData): Promise<SelectData> {
  return new Promise<SelectData>((resolve) => {
    setTimeout(
      () =>
        resolve({
          id1: id1,
          id2: id2,
          value1: value1,
          value2: value2,
          label1: label1,
          label2: label2,
          isShow: isShow,
        }),
      0
    );
  });
}

export const useSelect = ({
  id1,
  id2,
  value1,
  value2,
  label1,
  label2,
  isShow,
}: SelectData): UseSelectType => {
  const selectDataAll = async () => {
    const result = await getSelectData({
      id1,
      id2,
      value1,
      value2,
      label1,
      label2,
      isShow,
    });
    return result;
  };
  return {
    selectDataAll,
  };
};
