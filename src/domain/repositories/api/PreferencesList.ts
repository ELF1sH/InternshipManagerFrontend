import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IGetPreferencesListResponse,
  IPreferencesRepository,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

export class PreferencesRepository implements IPreferencesRepository {
  public getList = () => axiosInstance
    .get('/preferences')
    .then((response: AxiosResponse<IGetPreferencesListResponse>) => response.data);
}

export const preferencesRepository = new PreferencesRepository();
