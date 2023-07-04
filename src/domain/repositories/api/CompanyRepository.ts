import { AxiosResponse } from 'axios';

import { axiosInstance } from 'domain/repositories/api/axios';
import {
  ICompanyRepository,
  ICreateCompanyPayload, ICreateCompanyResponse,
  IGetCandidatesListResponse,
  IGetCompanyListResponse, IGetCompanyPayload, IGetCompanyResponse,
} from 'domain/repositories/api/interfaces/ICompanyRepository';

class CompanyRepository implements ICompanyRepository {
  public getList = () => axiosInstance
    .get('/companies')
    .then((response: AxiosResponse<IGetCompanyListResponse>) => response.data);

  public getCandidates = () => axiosInstance
    .get('/companies/candidates')
    .then((response: AxiosResponse<IGetCandidatesListResponse>) => response.data);

  public addCompany = (payload: ICreateCompanyPayload) => axiosInstance
    .post('/companies/delegates', payload)
    .then((response: AxiosResponse<ICreateCompanyResponse>) => response.data);

  public getCompany = ({ id }: IGetCompanyPayload) => axiosInstance
    .get(`/companies/${id}`)
    .then((response: AxiosResponse<IGetCompanyResponse>) => response.data);
}

export const companyRepository = new CompanyRepository();
