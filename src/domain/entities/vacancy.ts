import { ICompany } from 'domain/entities/company';

export interface IVacancy {
  id: number
  company: Omit<ICompany, 'vacancies'>
  name: string;
  techStack: string;
  minimumQuantity: number;
  maximumQuantity: number;
  imageUrl?: string
}
