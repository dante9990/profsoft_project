export interface LoginData {
  id: number;
  login: string;
  name: any;
  token: string;
}

type UseAuthType = {
  loginDataAll(): Promise<LoginData>;
};

// @ts-ignore
function getData({ id, login, name, token }): Promise<LoginData> {
  return new Promise<LoginData>((resolve) => {
    setTimeout(
      () =>
        resolve({
          id: id,
          login: login,
          name: name,
          token: token,
        }),
      0
    );
  });
}
export const useAuth = ({ id, login, name, token }: LoginData): UseAuthType => {
  const loginDataAll = async () => {
    const result = await getData({ id, login, name, token });
    return result;
  };
  return {
    loginDataAll,
  };
};
