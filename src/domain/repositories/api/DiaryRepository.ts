import { AxiosResponse } from 'axios';

import { IDiary } from 'domain/entities/diary';
import { axiosInstance } from 'domain/repositories/api/axios';
import {
  IDiaryRepository,
  IGetDiaryPayload,
  IPostDiaryPayload,
} from 'domain/repositories/api/interfaces/IDiaryRepository';
import { PatchDiaryUseCasePayload } from 'domain/useCases/diary/PatchDiarytUseCase';

class DiaryRepository implements IDiaryRepository {
  public getDiaries = () => axiosInstance
    .get('/diaries')
    .then((response: AxiosResponse<IDiary[]>) => response.data);

  public getDiary = ({ id }: IGetDiaryPayload) => axiosInstance
    .get(`/diaries/${id}`, {
      responseType: 'blob',
    })
    .then((response: AxiosResponse) => response.data);

  public postDiary = ({ file }: IPostDiaryPayload) => {
    const formData = new FormData();
    // @ts-ignore
    formData.append('file', file);

    return axiosInstance
      .post('/diaries', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response: AxiosResponse) => response.data);
  };

  public getDiariesList = () => axiosInstance
    .get('/diaries/list')
    .then((response: AxiosResponse<IDiary[]>) => response.data);

  public patchDiary = (payload: PatchDiaryUseCasePayload) => axiosInstance
    .patch('/diaries/status', payload)
    .then((response: AxiosResponse<IDiary>) => response.data);
}

export const diaryRepository = new DiaryRepository();
