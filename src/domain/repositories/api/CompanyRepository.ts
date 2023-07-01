import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import { ICompanyRepository, IGetCandidatesListResponse, IGetCompanyListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

class CompanyRepository implements ICompanyRepository {
  public getList = () => axiosInstance
    .get('/companies')
    .then((response: AxiosResponse<IGetCompanyListResponse>) => response.data);

  public getCandidates = () => axiosInstance
    .get('/companies/candidates')
    .then((response: AxiosResponse<IGetCandidatesListResponse>) => response.data);
}

export const companyRepository = new CompanyRepository();
