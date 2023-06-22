import { AxiosResponse } from 'axios';

import { IProfileRepository, IProfileRespone } from 'domain/repositories/api/interfaces/IProfileRepository';
import { axiosInstance } from 'domain/repositories/api/axios';

class ProfileRepository implements IProfileRepository {
  public getProfile = () => axiosInstance
    .get('/profiles')
    .then((response: AxiosResponse<IProfileRespone>) => response.data);
}

export const profileRepository = new ProfileRepository();
