import { AxiosResponse } from 'axios';

import { mockPreferencesList } from 'domain/repositories/api/mocks/preferencesMocks';
import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IGetPreferencesListResponse,
  IPreferencesRepository,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

mockPreferencesList();

export class PreferencesRepository implements IPreferencesRepository {
  public getList = () => axiosInstance
    .get('/preferences')
    .then((response: AxiosResponse<IGetPreferencesListResponse>) => response.data);
}

export const preferencesRepository = new PreferencesRepository();
