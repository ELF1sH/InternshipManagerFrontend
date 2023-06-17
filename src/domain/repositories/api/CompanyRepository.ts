import { AxiosResponse } from 'axios';

import { mockCompanyList } from 'domain/repositories/api/mocks/companyMocks';
import { axiosInstance } from 'domain/repositories/api/axios';
import { ICompanyRepository, IGetCompanyListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

mockCompanyList();
class CompanyRepository implements ICompanyRepository {
  public getList = () => axiosInstance
    .get('/companies')
    .then((response: AxiosResponse<IGetCompanyListResponse>) => response.data);
}

export const companyRepository = new CompanyRepository();
