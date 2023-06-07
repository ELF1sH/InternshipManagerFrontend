import axios, { AxiosResponse } from 'axios';

import { mockPreferencesList } from 'domain/repositories/api/mocks/preferencesMocks';
import {
  IGetPreferencesListResponse,
  IPreferencesRepository,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

mockPreferencesList();

export class PreferencesRepository implements IPreferencesRepository {
  public getList = () => axios
    .get('/preferences')
    .then((response: AxiosResponse<IGetPreferencesListResponse>) => response.data);
}

export const preferencesRepository = new PreferencesRepository();
