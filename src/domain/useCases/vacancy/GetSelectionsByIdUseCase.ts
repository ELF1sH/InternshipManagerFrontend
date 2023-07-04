import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { IGetSelectionsListResponse } from 'domain/repositories/api/interfaces/IVacancyRepository';

export class GetSelectionsByIdUseCase extends APIUseCase<
  number,
  IGetSelectionsListResponse
> { }
