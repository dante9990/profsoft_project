import { CertificateState, ActionTypesCert, CertType } from "../../types/cert";

const initialState: CertificateState = {
  id: -1,
  number: "",
  fullName: "",
  direction: "",
  dateFinish: "",
  dateStart: "",
  features: [],
  isShow: false,
  in_progress: false,
};

export const certReducer = (state = initialState, action: ActionTypesCert) => {
  switch (action.type) {
    case CertType.GETCERT: {
      return { ...state, ...action.payload };
    }
    case CertType.DELETECERT: {
      return {
        ...state,
        id: -1,
        number: "",
        fullName: "",
        direction: "",
        dateFinish: "",
        dateStart: "",
        features: [],
        isShow: false,
      };
    }
    case CertType.CHANGESHOW: {
      return {
        ...state,
        id: action.payload.id,
        number: action.payload.number,
        fullName: action.payload.fullName,
        direction: action.payload.direction,
        dateFinish: action.payload.dateFinish,
        dateStart: action.payload.dateStart,
        features: action.payload.features,
        isShow: !state.isShow,
      };
    }
    case CertType.IN_PROGRESS:
      return { ...state, in_progress: action.payload };
    default: {
      return state;
    }
  }
};
