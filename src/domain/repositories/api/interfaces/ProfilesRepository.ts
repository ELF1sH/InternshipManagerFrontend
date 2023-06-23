import { AxiosResponse } from 'axios';

import { IProfilesRepository } from 'domain/repositories/api/interfaces/IProfilesRepository';
import { axiosInstance } from 'domain/repositories/api/axios';
import { IUser } from 'domain/entities/user';

class ProfilesRepository implements IProfilesRepository {
  public getProfile = () => axiosInstance
    .get('/profiles')
    .then((response: AxiosResponse<IUser>) => response.data);
}

export const profilesRepository = new ProfilesRepository();
