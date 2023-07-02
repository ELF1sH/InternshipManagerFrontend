import { IStudent } from 'domain/entities/student';
import { IVacancy } from 'domain/entities/vacancy';

export interface IStudentsRepository {
  getStudent: (payload: IGetStudentPayload) => Promise<IStudent>
  getStudents: () => Promise<IStudent[]>;

  addStudent: (payload: IAddStudentPayload) => Promise<IAddStudentResponse>
  addStudentsList: (payload: IAddStudentsListPayload) => Promise<IAddStudentResponse[]>
}

export interface IGetStudentPayload {
  id: number;
}

export type IGetVacancyListResponse = IVacancy[];

export interface IAddStudentPayload {
  firstname: string;
  patronymic: string;
  lastname: string;
  groupNumber: string;
}

export interface IAddStudentResponse extends IStudent {
  password: string;
}

export type IAddStudentsListPayload = IAddStudentPayload[];
