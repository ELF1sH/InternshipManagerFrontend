import { ILoginResponse } from 'domain/repositories/api/interfaces/IAuthRepository';
import { mock } from 'domain/repositories/api/mocks/common';

export const mockLogin = () => {
  mock
    .onPost('/login')
    .reply((config) => {
      const data = JSON.parse(config.data);

      if (data.username === 'admin' && data.password === 'admin') {
        return [200, { authToken: 'qwerty123456', refreshToken: 'qwerty123456' } as ILoginResponse];
      }

      return [400];
    });
};

mockLogin();
