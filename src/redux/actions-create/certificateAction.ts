import { Dispatch } from "react";
import { useCert } from "../../hooks/useCert";
import { ActionTypesCert, CertType } from "../../types/cert";
import { CertData } from "../../hooks/useCert";

export const getCertFunc = ({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: CertData) => {
  return async (dispatch: Dispatch<ActionTypesCert>) => {
    dispatch({ type: CertType.IN_PROGRESS, payload: true });
    try {
      const { certDataAll } = useCert({
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow,
      });
      const obj = await certDataAll();
      //localStorage.setItem("userData", JSON.stringify(obj));
      dispatch({ type: CertType.GETCERT, payload: obj });
      dispatch({ type: CertType.IN_PROGRESS, payload: false });
    } catch (e) {
      dispatch({ type: CertType.IN_PROGRESS, payload: false });
    }
  };
};

export const deleteCert = () => {
  return (dispatch: Dispatch<ActionTypesCert>) => {
    dispatch({ type: CertType.DELETECERT, payload: true });
  };
};

export const changeShow = ({
  id,
  number,
  fullName,
  direction,
  dateFinish,
  dateStart,
  features,
  isShow,
}: CertData) => {
  return (dispatch: Dispatch<ActionTypesCert>) => {
    dispatch({
      type: CertType.CHANGESHOW,
      payload: {
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow,
      },
    });
  };
};
