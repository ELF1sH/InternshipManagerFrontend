import { ICompany } from 'domain/entities/company';

export interface ICompanyRepository {
  getList: () => Promise<IGetCompanyListResponse>
}

export type IGetCompanyListResponse = ICompany[];
