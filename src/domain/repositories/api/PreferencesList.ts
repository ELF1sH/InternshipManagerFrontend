import { AxiosResponse } from 'axios';

import { IPreferenceItem } from 'domain/entities/preferences';
import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IDeletePreferencePayload,
  IGetPreferencesListResponse,
  IPatchPreferencePayload,
  IPreferencesRepository,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

export class PreferencesRepository implements IPreferencesRepository {
  public getList = () => axiosInstance
    .get('/preferences')
    .then((response: AxiosResponse<IGetPreferencesListResponse>) => response.data);

  public patch = (payload: IPatchPreferencePayload) => axiosInstance
    .patch('/preferences')
    .then((response: AxiosResponse<IPreferenceItem>) => response.data);

  public delete = ({ id }: IDeletePreferencePayload) => axiosInstance
    .delete(`/preferences/${id}`)
    .then((response: AxiosResponse<void>) => response.data);
}

export const preferencesRepository = new PreferencesRepository();
