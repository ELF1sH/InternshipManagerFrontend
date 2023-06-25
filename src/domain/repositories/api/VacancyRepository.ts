import { AxiosResponse } from 'axios';

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

  public editVacancy = (payload: any) => axiosInstance
    .patch('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);

  public deleteVacancy = (payload: any) => axiosInstance
    .request({ url: `/vacancies/${payload}`, method: 'DELETE' });

  // ==============================================
  // ==================selections==================
  // ==============================================

  public getSelectionsList = () => axiosInstance
    .get('/selections')
    .then((response: AxiosResponse<IGetSelectionsListResponse>) => response.data);

  public addToSelections = (payload: any) => axiosInstance
    .post('/selections', { vacancyId: payload })
    .then((response: AxiosResponse<any>) => response.data);

  public patchSelection = ({ id, status }: IPatchSelectionPayload) => axiosInstance
    .patch(`/selections/${id}?status=${status}`)
    .then((response: AxiosResponse<any>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
