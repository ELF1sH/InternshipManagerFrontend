import { IVacancy } from 'domain/entities/vacancy';

export interface IPreferenceItem {
  id: number;
  vacancy: IVacancy
  studentId: string
  orderNumber: number;
}
