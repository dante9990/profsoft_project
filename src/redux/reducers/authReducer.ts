import { ActionState, ActionTypes, AuthType } from "../../types/auth";

const initialState: ActionState = {
  id: -1,
  login: "",
  token: "",
  name: "",
  in_progress: false,
};

export const authReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case AuthType.LOGIN: {
      return { ...state, ...action.payload };
    }
    case AuthType.LOGOUT: {
      return { ...state, id: -1, login: "", token: "", name: "" };
    }
    case AuthType.IN_PROGRESS:
      return { ...state, in_progress: action.payload };
    default: {
      return state;
    }
  }
};
