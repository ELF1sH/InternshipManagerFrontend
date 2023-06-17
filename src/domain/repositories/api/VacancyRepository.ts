import { AxiosResponse } from 'axios';

import { mockVacanciesList } from 'domain/repositories/api/mocks/vacancyMocks';
import { axiosInstance } from 'domain/repositories/api/axios';
import { IGetVacancyListResponse, IVacancyRepository } from 'domain/repositories/api/interfaces/IVacancyRepository';

mockVacanciesList();

class VacancyRepository implements IVacancyRepository {
  public getList = () => axiosInstance
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);

  public createVacancy = (payload: any) => axiosInstance
    .post('/vacancies', payload)
    .then((response: AxiosResponse<any>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
