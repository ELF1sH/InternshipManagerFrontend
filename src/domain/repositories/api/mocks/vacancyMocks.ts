import { vacanciesList } from 'domain/repositories/api/mocks/data/vacanciesList';
import { mock } from 'domain/repositories/api/mocks/common';

export const mockVacanciesList = () => {
  mock
    .onGet('/vacancies')
    .reply(() => [200, vacanciesList]);
};
