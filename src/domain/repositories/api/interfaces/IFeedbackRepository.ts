import { IFeedback } from 'domain/entities/feedback';

export interface IFeedbackRepository {
  getList: ({ studentId }:{studentId: number}) => Promise<IFeedback[]>;
}
