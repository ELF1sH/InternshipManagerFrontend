import axios, { AxiosResponse } from 'axios';

import { IAuthRepository } from 'domain/repositories/api/interfaces/IAuthRepository';
import { ILoginPayload, ILoginResponse } from 'domain/entities/auth';
import { mockLogin } from 'domain/repositories/api/mocks/authMocks';

mockLogin();

class AuthRepository implements IAuthRepository {
  public login(payload: ILoginPayload) {
    return axios
      .post('/login', payload)
      .then((response: AxiosResponse<ILoginResponse>) => response.data);
  }
}

export const authRepository = new AuthRepository();
