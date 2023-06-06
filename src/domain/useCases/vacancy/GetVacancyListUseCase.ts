import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { IGetVacancyListResponse } from 'domain/repositories/api/interfaces/IVacancyRepository';

export class GetVacancyListUseCase extends APIUseCase<
  undefined,
  IGetVacancyListResponse
> { }
