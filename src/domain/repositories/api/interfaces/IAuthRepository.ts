import { ILoginPayload, ILoginResponse } from 'domain/entities/auth';

export interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<ILoginResponse>;
}
