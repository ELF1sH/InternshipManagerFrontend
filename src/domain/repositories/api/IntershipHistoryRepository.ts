import { AxiosResponse } from 'axios';

import { IInternshipHistoryRepository } from 'domain/repositories/api/interfaces/IIntershipHistoryRepository';
import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { axiosInstance } from 'domain/repositories/api/axios';

class InternshipHistoryRepository implements IInternshipHistoryRepository {
  public getList = () => axiosInstance
    .get('/internship/history')
    .then((response: AxiosResponse<IInternshipHistory[]>) => response.data);
}

export const internshipHistoryRepository = new InternshipHistoryRepository();
