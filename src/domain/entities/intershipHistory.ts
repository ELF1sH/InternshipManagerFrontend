import { ICompany } from 'domain/entities/company';

export interface IInternshipHistory {
  id: number;
  company: ICompany
  orderNumber: number;
  startDate: string
  endDate: string;
}
