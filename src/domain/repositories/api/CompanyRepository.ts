import axios, { AxiosResponse } from 'axios';

import { mockCompanyList } from 'domain/repositories/api/mocks/companyMocks';
import { ICompanyRepository, IGetCompanyListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

mockCompanyList();

class CompanyRepository implements ICompanyRepository {
  public getList = () => axios
    .get('/companies')
    .then((response: AxiosResponse<IGetCompanyListResponse>) => response.data);
}

export const companyRepository = new CompanyRepository();
