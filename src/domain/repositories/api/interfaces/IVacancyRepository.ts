import { SelectionStatus } from 'domain/entities/selection';
import { IVacancy } from 'domain/entities/vacancy';

export interface IVacancyRepository {
  getList: () => Promise<IGetVacancyListResponse>;
  createVacancy: (payload: any) => Promise<any>;
}

export type IGetVacancyListResponse = IVacancy[];

export interface IPatchSelectionPayload {
  id: number;
  status: SelectionStatus;
}
