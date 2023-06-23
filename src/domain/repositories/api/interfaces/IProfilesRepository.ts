import { IUser } from 'domain/entities/user';

export interface IProfilesRepository {
  getProfile: () => Promise<IUser>;
}
