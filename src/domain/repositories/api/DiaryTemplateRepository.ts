import { AxiosResponse } from 'axios';

import { IDiaryTemplate } from 'domain/entities/diaryTemplate';
import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IDiaryTemplateRepository,
  IGetDiaryTemplatePayload, IPostDiaryTemplatePayload,
} from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';

class DiaryTemplateRepository implements IDiaryTemplateRepository {
  public getList = () => axiosInstance
    .get('/diaries/templates')
    .then((response: AxiosResponse<IDiaryTemplate[]>) => response.data);

  public getDiaryTemplate = ({ id }: IGetDiaryTemplatePayload) => axiosInstance
    .get(`/diaries/templates/${id}`, {
      responseType: 'blob',
    })
    .then((response: AxiosResponse) => response.data);

  public postDiaryTemplate = ({ file }: IPostDiaryTemplatePayload) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', file);

    return axiosInstance
      .post('/diaries/templates', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response: AxiosResponse) => response.data);
  };
}

const diaryTemplateRepository = new DiaryTemplateRepository();
