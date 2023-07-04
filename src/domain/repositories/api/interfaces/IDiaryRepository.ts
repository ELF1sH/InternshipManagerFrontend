import { IDiary } from 'domain/entities/diary';

export interface IDiaryRepository {
  getDiaries: () => Promise<IDiary[]>;
  getDiary: (payload: IGetDiaryPayload) => Promise<File>;
  postDiary: (payload: IPostDiaryPayload) => Promise<undefined>;
}

export interface IGetDiaryPayload {
  id: string;
}

export interface IPostDiaryPayload {
  file: File;
}
