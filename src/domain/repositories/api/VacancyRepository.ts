import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import { IGetVacancyListResponse, IVacancyRepository } from 'domain/repositories/api/interfaces/IVacancyRepository';

class VacancyRepository implements IVacancyRepository {
  public getList = () => axiosInstance
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);

  public createVacancy = (payload: any) => axiosInstance
    .post('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);

  public addToSelections = (payload: any) => axiosInstance
    .post('/selections', { vacancyId: payload })
    .then((response: AxiosResponse<any>) => response.data);

  public getSelections = () => axiosInstance
    .get('/selections')
    .then((response: AxiosResponse<any>) => response.data);

  public editVacancy = (payload: any) => axiosInstance
    .patch('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);

  public deleteVacancy = (payload: any) => axiosInstance
    .request({ url: `/vacancies/${payload}`, method: 'DELETE' });
}

export const vacancyRepository = new VacancyRepository();
