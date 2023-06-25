import { AxiosResponse } from 'axios';

import { IGetVacancyListResponse } from 'domain/repositories/api/interfaces/IStudentsRepository';
import {
  ICreateOrEditVacancyPayload,
  IGetSelectionsListResponse,
  IPatchSelectionPayload, IVacancyRepository,
} from 'domain/repositories/api/interfaces/IVacancyRepository';
import { IVacancy } from 'domain/entities/vacancy';
import { axiosInstance } from 'domain/repositories/api/axios';

class VacancyRepository implements IVacancyRepository {
  // ==============================================
  // ==================vacancies==================
  // ==============================================

  public getList = () => axiosInstance
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);

  public createVacancy = (payload: ICreateOrEditVacancyPayload) => axiosInstance
    .post('/vacancies', payload)
    .then((response: AxiosResponse<IVacancy>) => response.data);

  public addToSelections = (payload: number) => axiosInstance
    .post('/selections', { vacancyId: payload })
    .then((response: AxiosResponse<any>) => response.data);

  public editVacancy = (payload: ICreateOrEditVacancyPayload) => axiosInstance
    .patch('/vacancies', payload)
    .then((response: AxiosResponse<IVacancy>) => response.data);

  public deleteVacancy = (payload: number) => axiosInstance
    .delete(`/vacancies/${payload}`)
    .then((response: AxiosResponse) => response.data);

  // ==============================================
  // ==================selections==================
  // ==============================================

  public getSelectionsList = () => axiosInstance
    .get('/selections')
    .then((response: AxiosResponse<IGetSelectionsListResponse>) => response.data);

  public patchSelection = ({ id, status }: IPatchSelectionPayload) => axiosInstance
    .patch(`/selections/${id}?status=${status}`)
    .then((response: AxiosResponse<any>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
