import { AxiosResponse } from 'axios';

import { IGetSelectionsListResponse } from 'domain/repositories/api/interfaces/IVacancyRepository';
import {
  IAddStudentPayload, IAddStudentResponse, IAddStudentsListPayload,
  IGetStudentPayload,
  IStudentsRepository,
} from 'domain/repositories/api/interfaces/IStudentsRepository';
import { IStudent } from 'domain/entities/student';
import { axiosInstance } from 'domain/repositories/api/axios';
import { IDiary } from 'domain/entities/diary';

class StudentsRepository implements IStudentsRepository {
  public getStudent = ({ id }: IGetStudentPayload) => axiosInstance
    .get(`/students/${id}`)
    .then((response: AxiosResponse<IStudent>) => response.data);

  public getStudents = () => axiosInstance
    .get('/students')
    .then((response: AxiosResponse<IStudent[]>) => response.data);

  public addStudent = (payload: IAddStudentPayload) => axiosInstance
    .post('/students', payload)
    .then((response: AxiosResponse<IAddStudentResponse>) => response.data);

  public addStudentsList = (payload: IAddStudentsListPayload) => axiosInstance
    .post('/students/list', payload)
    .then((response: AxiosResponse<IAddStudentResponse[]>) => response.data);

  public getSelectionsListById = (payload: number) => axiosInstance
    .get(`/students/${payload}/selections`)
    .then((response: AxiosResponse<IGetSelectionsListResponse>) => response.data);

  public getDiaresListById = (payload: number) => axiosInstance
    .get(`/students/${payload}/diaries`)
    .then((response: AxiosResponse<IDiary[]>) => response.data);
}

export const studentsRepository = new StudentsRepository();
