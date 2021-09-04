import { Dispatch } from "react";
import { useSelect } from "../../hooks/useSelect";
import { ActionTypesSelect, SelectType } from "../../types/select";
import { SelectData } from "../../hooks/useSelect";

export const deleteSelect = () => {
  return (dispatch: Dispatch<ActionTypesSelect>) => {
    dispatch({ type: SelectType.DELETESELECT, payload: true });
  };
};

export const getSelectFunc = ({
  id1,
  id2,
  value1,
  value2,
  label1,
  label2,
  isShow,
}: SelectData) => {
  return async (dispatch: Dispatch<ActionTypesSelect>) => {
    dispatch({ type: SelectType.IN_PROGRESS, payload: true });
    try {
      const { selectDataAll } = useSelect({
        id1,
        id2,
        value1,
        value2,
        label1,
        label2,
        isShow,
      });
      const obj = await selectDataAll();
      dispatch({ type: SelectType.GETSELECT, payload: obj });
      dispatch({ type: SelectType.IN_PROGRESS, payload: false });
    } catch (e) {
      dispatch({ type: SelectType.IN_PROGRESS, payload: false });
    }
  };
};

export const changeSelect = ({
  id1,
  id2,
  value1,
  value2,
  label1,
  label2,
  isShow,
}: SelectData) => {
  return (dispatch: Dispatch<ActionTypesSelect>) => {
    dispatch({
      type: SelectType.CHANGESELECT,
      payload: {
        id1,
        id2,
        value1,
        value2,
        label1,
        label2,
        isShow,
      },
    });
  };
};

export const changeShowSelect = ({
  id1,
  id2,
  value1,
  value2,
  label1,
  label2,
  isShow,
}: SelectData) => {
  return (dispatch: Dispatch<ActionTypesSelect>) => {
    dispatch({
      type: SelectType.CHANGESHOWSELECT,
      payload: {
        id1,
        id2,
        value1,
        value2,
        label1,
        label2,
        isShow,
      },
    });
  };
};
