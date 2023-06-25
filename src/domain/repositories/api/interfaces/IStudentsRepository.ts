import { AddStudentRequest, IStudent } from 'domain/entities/student';
import { IVacancy } from 'domain/entities/vacancy';

export interface IStudentsRepository {
  getStudents: () => Promise<IStudent[]>;
  addStudentsList: (payload: AddStudentRequest[]) => Promise<IStudent[]>
  getStudent: (payload: {id: number}) => Promise<IStudent>
  addStudent: (payload: AddStudentRequest) => Promise<IStudent>
}

export type IGetVacancyListResponse = IVacancy[];
