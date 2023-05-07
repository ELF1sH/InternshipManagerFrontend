import { ILoginResponse } from 'domain/entities/auth';
import { mock } from 'domain/repositories/api/mocks/common';

export const mockLogin = () => {
  mock
    .onPost('/login')
    .reply((config) => {
      const data = JSON.parse(config.data);

      if (data.username === 'admin' && data.password === 'admin') {
        return [200, { accessToken: 'qwerty123456' } as ILoginResponse];
      }

      return [400];
    });
};
