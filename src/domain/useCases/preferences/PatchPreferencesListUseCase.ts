import { IPreferenceItem } from 'domain/entities/preferences';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import {
  IPatchPreferencePayload,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

export class PatchPreferencesListUseCase extends APIUseCase<
  IPatchPreferencePayload,
  IPreferenceItem
> { }
