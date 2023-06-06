import { IVacancy } from 'domain/entities/vacancy';

export interface IVacancyRepository {
  getList: () => Promise<IGetVacancyListResponse>;
}

export type IGetVacancyListResponse = IVacancy[];
