import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IAuthRepository,
  IChangePasswordPayload,
  ILoginPayload,
  ILoginResponse,
} from 'domain/repositories/api/interfaces/IAuthRepository';

class AuthRepository implements IAuthRepository {
  public login = (payload: ILoginPayload) => axiosInstance
    .post('/auth/login', payload)
    .then((response: AxiosResponse<ILoginResponse>) => response.data);

  public changePassword = (payload: IChangePasswordPayload) => axiosInstance
    .post('/auth/password', payload)
    .then((response: AxiosResponse<ILoginResponse>) => response.data);
}

export const authRepository = new AuthRepository();
