import { AxiosResponse } from 'axios';

import { IStudent } from 'domain/entities/student';
import { axiosInstance } from 'domain/repositories/api/axios';

class StudentsRepository {
  public getStudents = () => axiosInstance
    .get('/students')
    .then((response: AxiosResponse<IStudent[]>) => response.data);

  public addStudentsList = (payload: any) => axiosInstance
    .post('/students/list', payload)
    .then((response: AxiosResponse<IStudent[]>) => response.data);
}

export const studentsRepository = new StudentsRepository();
