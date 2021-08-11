import {
  GET_CERTIFICATE,
  DELETE_CERTIFICATE,
  CertificateAction,
  CHANGE_CERTIFICATE_FLAG,
} from "../actions/certAction";

const initialState = {
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
  isShow: false,
};
export const certificateReducer = (
  state = initialState,
  action: CertificateAction
) => {
  switch (action.type) {
    case GET_CERTIFICATE: {
      const { number, fullName, dateFinish, dateStart, direction, features } =
        action;
      return {
        ...state,
        number,
        fullName,
        dateFinish,
        dateStart,
        direction,
        features,
      };
    }
    case DELETE_CERTIFICATE: {
      return {
        ...state,
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
    }
    case CHANGE_CERTIFICATE_FLAG: {
      const {
        number,
        fullName,
        dateFinish,
        dateStart,
        direction,
        features,
        isShow,
      } = action;
      return {
        ...state,
        number,
        fullName,
        dateFinish,
        dateStart,
        direction,
        features,
        isShow: !isShow,
      };
    }
    default: {
      return state;
    }
  }
};
