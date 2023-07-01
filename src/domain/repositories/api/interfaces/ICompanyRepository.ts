import { ICompany } from 'domain/entities/company';
import { ICandidate } from 'domain/entities/condidate';

export interface ICompanyRepository {
  getList: () => Promise<IGetCompanyListResponse>
  getCandidates: () => Promise<IGetCandidatesListResponse>
}

export type IGetCompanyListResponse = ICompany[];

export type IGetCandidatesListResponse = ICandidate[];
