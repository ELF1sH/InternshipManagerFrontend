export interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<ILoginResponse>;
}

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  authToken: string;
  refreshToken: string;
}
