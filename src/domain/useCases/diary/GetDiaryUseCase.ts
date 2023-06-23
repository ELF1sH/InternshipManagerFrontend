import { IGetDiaryPayload } from 'domain/repositories/api/interfaces/IDiaryRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetDiaryUseCase extends APIUseCase<
  IGetDiaryPayload,
  any
> { }
