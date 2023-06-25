import { ICompany } from 'domain/entities/company';

export interface IVacancy {
  id: number
  company: ICompany
  name: string;
  techStack: string;
  minimumQuantity: number;
  maximumQuantity: number;
}
