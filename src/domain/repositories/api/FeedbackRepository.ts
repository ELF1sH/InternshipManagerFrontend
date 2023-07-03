import { AxiosResponse } from 'axios';

import { IFeedback } from 'domain/entities/feedback';
import { axiosInstance } from 'domain/repositories/api/axios';
import { IFeedbackRepository } from 'domain/repositories/api/interfaces/IFeedbackRepository';

class FeedbackRepository implements IFeedbackRepository {
  public getList = ({ studentId }:{studentId: number}) => axiosInstance
    .get(`/feedback/students/${studentId}`)
    .then((response: AxiosResponse<IFeedback[]>) => response.data);
}
export const feedbackRepository = new FeedbackRepository();
