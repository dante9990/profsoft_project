export enum AuthType {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  IN_PROGRESS = "IN_PROGRESS",
}

interface LoginActionType {
  type: AuthType.LOGIN;
  payload: {
    id: number;
    login: string;
    name: any;
    token: string;
  };
}

interface LogoutActionType {
  type: AuthType.LOGOUT;
  payload: boolean;
}

interface StateActionType {
  type: AuthType.IN_PROGRESS;
  payload: boolean;
}

export interface ActionState {
  id: number;
  login: string;
  token: string;
  name: any;
  in_progress: boolean;
}
export type ActionTypes = LoginActionType | LogoutActionType | StateActionType;
