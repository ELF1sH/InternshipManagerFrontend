import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import {
  IDeletePreferencePayload,
} from 'domain/repositories/api/interfaces/IPreferencesRepository';

export class DeletePreferencesListUseCase extends APIUseCase<
  IDeletePreferencePayload,
  void
> { }
