export type UserCreate = {
  name: string;
  email: string;
  role: string;
};

export type User = {
  id: number;
  status: number;
} & UserCreate;
