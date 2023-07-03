import { IDiaryTemplate } from 'domain/entities/diaryTemplate';

export interface IDiaryTemplateRepository {
  getList: () => Promise<IDiaryTemplate[]>;
  getDiaryTemplate: (payload: IGetDiaryTemplatePayload) => Promise<File>;
  postDiaryTemplate: (payload: IPostDiaryTemplatePayload) => Promise<undefined>;
}

export interface IGetDiaryTemplatePayload {
  id: string;
}

export interface IPostDiaryTemplatePayload {
  file: string;
  request: {
    description: string;
    course: string;
  }
}
