import { ICompany } from 'domain/entities/company';
import { ICandidate } from 'domain/entities/condidate';

export interface ICompanyRepository {
  getList: () => Promise<IGetCompanyListResponse>
  getCandidates: () => Promise<IGetCandidatesListResponse>
  addCompany: (payload: ICompany) => Promise<ICompany>
}

export type IGetCompanyListResponse = ICompany[];

export type IGetCandidatesListResponse = ICandidate[];
