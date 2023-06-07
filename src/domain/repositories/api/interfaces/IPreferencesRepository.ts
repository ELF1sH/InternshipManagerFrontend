import { IPreferenceItem } from 'domain/entities/preferences';

export interface IPreferencesRepository {
  getList: () => Promise<IGetPreferencesListResponse>
}

export type IGetPreferencesListResponse = IPreferenceItem[];
