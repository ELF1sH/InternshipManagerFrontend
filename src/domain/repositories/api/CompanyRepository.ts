import { AxiosResponse } from 'axios';

import { AddCompanyRequest, ICompany } from 'domain/entities/company';
import { axiosInstance } from 'domain/repositories/api/axios';
import { ICompanyRepository, IGetCandidatesListResponse, IGetCompanyListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

class CompanyRepository implements ICompanyRepository {
  public getList = () => axiosInstance
    .get('/companies')
    .then((response: AxiosResponse<IGetCompanyListResponse>) => response.data);

  public getCandidates = () => axiosInstance
    .get('/companies/candidates')
    .then((response: AxiosResponse<IGetCandidatesListResponse>) => response.data);

  public addCompany = (payload: AddCompanyRequest) => axiosInstance
    .post('/companies', payload)
    .then((response:AxiosResponse<ICompany>) => response.data);
}

export const companyRepository = new CompanyRepository();
