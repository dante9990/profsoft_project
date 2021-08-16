import { Dispatch } from "react";
import { useAuth } from "../../hooks/useAuth";
import { ActionTypes, AuthType } from "../../types/auth";
import { LoginData } from "../../hooks/useAuth";

export const loginFunc = ({ id, login, name, token }: LoginData) => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: AuthType.IN_PROGRESS, payload: true });
    try {
      const { loginDataAll } = useAuth({ id, login, name, token });
      const obj = await loginDataAll();
      localStorage.setItem("userData", JSON.stringify(obj));
      dispatch({ type: AuthType.LOGIN, payload: obj });
      dispatch({ type: AuthType.IN_PROGRESS, payload: false });
    } catch (e) {
      dispatch({ type: AuthType.IN_PROGRESS, payload: false });
    }
  };
};

export const logout = () => {
  return (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: AuthType.LOGOUT, payload: true });
    localStorage.removeItem("userData");
  };
};
