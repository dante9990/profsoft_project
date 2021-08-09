import {
  GetCertAction,
  GETCERT,
  DELCERT,
  CHANGESHOW,
} from "../actions/certAction";

const initialStateGet = {
  id: "",
  number: "",
  fullName: "",
  direction: "",
  dateFinish: "",
  dateStart: "",
  features: [],
  isShow: false,
};

export const certReducer = (state = initialStateGet, action: GetCertAction) => {
  switch (action.type) {
    case GETCERT: {
      const {
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow,
      } = action;
      return {
        ...state,
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow,
      };
    }
    case CHANGESHOW: {
      const {
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow,
      } = action;
      return {
        ...state,
        id,
        number,
        fullName,
        direction,
        dateFinish,
        dateStart,
        features,
        isShow: !state.isShow,
      };
    }
    case DELCERT: {
      return {
        ...state,
        id: "",
        number: "",
        fullName: "",
        direction: "",
        dateFinish: "",
        dateStart: "",
        features: [],
        isShow: false,
      };
    }
    default: {
      return state;
    }
  }
};
