import { companiesList } from 'domain/repositories/api/mocks/data/companiesList';
import { mock } from 'domain/repositories/api/mocks/common';

export const mockCompanyList = () => {
  mock
    .onGet('/companies')
    .reply(() => [200, companiesList]);
};
