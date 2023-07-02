import { IInternshipHistory } from 'domain/entities/intershipHistory';

export interface IInternshipHistoryRepository {
  getList: () => Promise<IInternshipHistory[]>;
}

export type IGetInternshipHistoryPayload = IInternshipHistory[]
