import { ICompany } from 'domain/entities/company';
import { ICandidate } from 'domain/entities/condidate';

export interface ICompanyRepository {
  getList: () => Promise<IGetCompanyListResponse>
  getCandidates: () => Promise<IGetCandidatesListResponse>
  addCompany: (payload: ICreateCompanyPayload) => Promise<ICreateCompanyResponse>
}

export type IGetCompanyListResponse = ICompany[];

export type IGetCandidatesListResponse = ICandidate[];

export type ICreateCompanyPayload = Omit<ICompany, 'vacancies' | 'id'>

export interface ICreateCompanyResponse {
  id: number;
  username: string;
  password: string;
  company: ICompany;
}
