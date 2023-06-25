import { AxiosResponse } from 'axios';

import { IStudentsRepository } from 'domain/repositories/api/interfaces/IStudentsRepository';
import { AddStudentRequest, IStudent } from 'domain/entities/student';
import { axiosInstance } from 'domain/repositories/api/axios';

class StudentsRepository implements IStudentsRepository {
  public getStudents = () => axiosInstance
    .get('/students')
    .then((response: AxiosResponse<IStudent[]>) => response.data);

  public addStudentsList = (payload: AddStudentRequest[]) => axiosInstance
    .post('/students/list', payload)
    .then((response: AxiosResponse<IStudent[]>) => response.data);

  public getStudent = ({ id }: { id: number }) => axiosInstance
    .get(`/students/${id}`)
    .then((response: AxiosResponse<IStudent>) => response.data);

  public addStudent = (payload: AddStudentRequest) => axiosInstance
    .post('/students', payload)
    .then((response: AxiosResponse<IStudent>) => response.data);
}

export const studentsRepository = new StudentsRepository();
