import { AxiosResponse } from 'axios';

import { IInternshipHistoryRepository } from 'domain/repositories/api/interfaces/IIntershipHistoryRepository';
import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { axiosInstance } from 'domain/repositories/api/axios';

class InternshipHistoryRepository implements IInternshipHistoryRepository {
  public getList = () => axiosInstance
    .get('/internship/history')
    .then((response: AxiosResponse<IInternshipHistory[]>) => response.data);

  public patchByVacancy = (
    payload:
    { vacancyId: number; semester: number; },
  ) => axiosInstance
    .patch(`/internships/vacancies/${payload.vacancyId}`, { semester: payload.semester })
    .then(() => {});

  public postInternship = (
    payload:
      { companyName: string; semester: number; },
  ) => axiosInstance
    .post('/internship', { semester: payload.semester, companyName: payload.companyName })
    .then(() => {});
}

export const internshipHistoryRepository = new InternshipHistoryRepository();
