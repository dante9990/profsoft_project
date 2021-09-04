export interface SelectState {
  id1: number;
  id2: number;
  value1: string;
  value2: string;
  label1: string;
  label2: string;
  isShow: boolean;
  in_progress: boolean;
}

export enum SelectType {
  GETSELECT = "GETCERT",
  CHANGESELECT = "CHANGESHOW",
  IN_PROGRESS = "IN_PROGRESS",
  CHANGESHOWSELECT = "CHANGESHOWSELECT",
  DELETESELECT = "DELETESELECT",
}
interface DeleteSelectActionType {
  type: SelectType.DELETESELECT;
  payload: boolean;
}

interface GetSelectActionType {
  type: SelectType.GETSELECT;
  payload: {
    id1: number;
    id2: number;
    value1: string;
    value2: string;
    label1: string;
    label2: string;
    isShow: boolean;
  };
}

interface ChangeSelectType {
  type: SelectType.CHANGESELECT;
  payload: {
    id1: number;
    id2: number;
    value1: string;
    value2: string;
    label1: string;
    label2: string;
    isShow: boolean;
  };
}

interface ChangeShowSelectActionType {
  type: SelectType.CHANGESHOWSELECT;
  payload: {
    id1: number;
    id2: number;
    value1: string;
    value2: string;
    label1: string;
    label2: string;
    isShow: boolean;
  };
}

interface StateActionType {
  type: SelectType.IN_PROGRESS;
  payload: boolean;
}

export type ActionTypesSelect =
  | GetSelectActionType
  | ChangeSelectType
  | StateActionType
  | ChangeShowSelectActionType
  | DeleteSelectActionType;
