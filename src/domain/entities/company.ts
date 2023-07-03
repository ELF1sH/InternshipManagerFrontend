import { IVacancy } from 'domain/entities/vacancy';

export interface ICompany {
  id: number;
  name: string;
  contactNumber: string
  contactFirstname: string
  contactLastname: string
  contactPatronymic: string
  vacancies: IVacancy[]
  imageUrl?: string
}
