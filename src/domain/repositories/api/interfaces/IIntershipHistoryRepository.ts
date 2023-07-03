import { IInternshipHistory } from 'domain/entities/intershipHistory';

export interface IInternshipHistoryRepository {
  getList: () => Promise<IInternshipHistory[]>;
  patchByVacancy: ({ vacancyId, semester }: {vacancyId: number, semester: number}) => Promise<void>
}

export type IGetInternshipHistoryPayload = IInternshipHistory[]
