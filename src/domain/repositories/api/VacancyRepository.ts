import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IGetVacancyListResponse,
  IPatchSelectionPayload,
  IVacancyRepository,
} from 'domain/repositories/api/interfaces/IVacancyRepository';

class VacancyRepository implements IVacancyRepository {
  // ==============================================
  // ==================vacancies==================
  // ==============================================

  public getList = () => axiosInstance
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);

  public createVacancy = (payload: any) => axiosInstance
    .post('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);

  public editVacancy = (payload: any) => axiosInstance
    .patch('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);

  public deleteVacancy = (payload: any) => axiosInstance
    .request({ url: `/vacancies/${payload}`, method: 'DELETE' });

  // ==============================================
  // ==================selections==================
  // ==============================================

  public getSelections = () => axiosInstance
    .get('/selections')
    .then((response: AxiosResponse<any>) => response.data);

  public addToSelections = (payload: any) => axiosInstance
    .post('/selections', { vacancyId: payload })
    .then((response: AxiosResponse<any>) => response.data);

  public patchSelection = ({ id, status }: IPatchSelectionPayload) => axiosInstance
    .patch(`/selections/${id}?status=${status}`)
    .then((response: AxiosResponse<any>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
