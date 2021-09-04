import { SelectState, ActionTypesSelect, SelectType } from "../../types/select";

const initialState: SelectState = {
  id1: -1,
  id2: -1,
  value1: "initialValue1",
  value2: "initialValue2",
  label1: "Выберите курс",
  label2: "Период",
  isShow: false,
  in_progress: false,
};

export const selectReducer = (
  state = initialState,
  action: ActionTypesSelect
) => {
  switch (action.type) {
    case SelectType.GETSELECT: {
      return { ...state, ...action.payload };
    }
    case SelectType.CHANGESELECT: {
      return {
        ...state,
        id1: action.payload.id1,
        id2: action.payload.id2,
        value1: action.payload.value1,
        value2: action.payload.value2,
        label1: action.payload.label1,
        label2: action.payload.label2,
        isShow: action.payload.isShow,
      };
    }
    case SelectType.DELETESELECT: {
      return {
        ...state,
        id1: -1,
        id2: -1,
        value1: "initialValue1",
        value2: "initialValue2",
        label1: "Выберите курс",
        label2: "Период",
        isShow: false,
      };
    }
    case SelectType.CHANGESHOWSELECT: {
      return {
        ...state,
        id1: action.payload.id1,
        id2: action.payload.id2,
        value1: action.payload.value1,
        value2: action.payload.value2,
        label1: action.payload.label1,
        label2: action.payload.label2,
        isShow: !state.isShow,
      };
    }

    case SelectType.IN_PROGRESS:
      return { ...state, in_progress: action.payload };
    default: {
      return state;
    }
  }
};
