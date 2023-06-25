import { IPreferenceItem } from 'domain/entities/preferences';

export interface IPreferencesRepository {
  getList: () => Promise<IGetPreferencesListResponse>;
  post: (payload: IPostPreferencePayload) => Promise<void>;
  patch: (payload: IPatchPreferencePayload) => Promise<IPreferenceItem>;
  delete: (payload: IDeletePreferencePayload) => Promise<void>;
}

export type IGetPreferencesListResponse = IPreferenceItem[];

export interface IPostPreferencePayload {
  vacancyId: number;
}

export interface IPatchPreferencePayload {
  id: number;
  vacancyId: number;
  orderNumber: number;
}

export interface IDeletePreferencePayload {
  id: number;
}
