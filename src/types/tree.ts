export type TreeData = {
  id: number;
  name: string;
  organizations: Organization[];
};

export type Organization = {
  id: number;
  name: string;
  organizations: Organization[];
  users?: UserTree[];
};

export type UserTree = {
  id: number;
  name: string;
  surname: string;
  patronymic: string;
  org_name: string;
};
