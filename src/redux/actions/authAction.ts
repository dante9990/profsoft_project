export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

type Action = {
  type: string;
};

export type LoginAction = {
  id: number;
  login: string;
  name: string;
  token: string;
} & Action;

interface LoginProps {
  id: number;
  login: string;
  name: any;
  token: string;
}

export const loginAction = ({ id, login, name, token }: LoginProps) => {
  return {
    type: LOGIN,
    id,
    name,
    login,
    token,
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT,
    login: "",
    token: "",
    name: "",
  };
};
