export interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<ILoginResponse>;
  changePassword: (payload: IChangePasswordPayload) => Promise<ILoginResponse>;
}

export interface ILoginPayload {
  username: string;
  password: string;
}

export interface ILoginResponse {
  authToken: string;
  refreshToken: string;
}

export interface IChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}
