import axios, { AxiosResponse } from 'axios';

import { IAuthRepository, ILoginPayload, ILoginResponse } from 'domain/repositories/api/interfaces/IAuthRepository';
import { mockLogin } from 'domain/repositories/api/mocks/authMocks';

mockLogin();

class AuthRepository implements IAuthRepository {
  public login = (payload: ILoginPayload) => axios
    .post('/login', payload)
    .then((response: AxiosResponse<ILoginResponse>) => response.data);
}

export const authRepository = new AuthRepository();
