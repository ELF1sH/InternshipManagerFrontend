import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { IGetPreferencesListResponse } from 'domain/repositories/api/interfaces/IPreferencesRepository';

export class GetPreferencesListByIdUseCase extends APIUseCase<
  number,
  IGetPreferencesListResponse
> { }
