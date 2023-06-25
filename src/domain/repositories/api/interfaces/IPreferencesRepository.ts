import { IPreferenceItem } from 'domain/entities/preferences';

export interface IPreferencesRepository {
  getList: () => Promise<IGetPreferencesListResponse>;
  patch: (payload: IPatchPreferencePayload) => Promise<IPreferenceItem>;
  delete: (payload: IDeletePreferencePayload) => Promise<void>;
}

export type IGetPreferencesListResponse = IPreferenceItem[];

export interface IPatchPreferencePayload {
  id: number;
  vacancyId: number;
  orderNumber: number;
}

export interface IDeletePreferencePayload {
  id: number;
}
