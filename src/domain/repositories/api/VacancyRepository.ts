import axios, { AxiosResponse } from 'axios';

import { mockVacanciesList } from 'domain/repositories/api/mocks/vacancyMocks';
import { IGetVacancyListResponse, IVacancyRepository } from 'domain/repositories/api/interfaces/IVacancyRepository';

mockVacanciesList();

class VacancyRepository implements IVacancyRepository {
  public getList = () => axios
    .get('/vacancies')
    .then((response: AxiosResponse<IGetVacancyListResponse>) => response.data);
}

export const vacancyRepository = new VacancyRepository();
