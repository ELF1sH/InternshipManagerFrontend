import { AxiosResponse } from 'axios';

import { IVacancy } from 'domain/entities/vacancy';
import { axiosInstance } from 'domain/repositories/api/axios';
import {
  ICreateOrEditVacancyPayload, IGetSelectionsListResponse,
  IGetVacancyListResponse, IVacancyRepository,
} from 'domain/repositories/api/interfaces/IVacancyRepository';

class VacancyRepository implements IVacancyRepository {
  public getList = () => axiosInstance
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);

  public createVacancy = (payload: ICreateOrEditVacancyPayload) => axiosInstance
    .post('/vacancies', payload)
    .then((response: AxiosResponse<IVacancy>) => response.data);

  public addToSelections = (payload: number) => axiosInstance
    .post('/selections', { vacancyId: payload })
    .then((response: AxiosResponse<any>) => response.data);

  public getSelectionsList = () => axiosInstance
    .get('/selections')
    .then((response: AxiosResponse<IGetSelectionsListResponse>) => response.data);

  public editVacancy = (payload: ICreateOrEditVacancyPayload) => axiosInstance
    .patch('/vacancies', payload)
    .then((response: AxiosResponse<IVacancy>) => response.data);

  public deleteVacancy = (payload: number) => axiosInstance
    .delete(`/vacancies/${payload}`)
    .then((response: AxiosResponse<void>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
