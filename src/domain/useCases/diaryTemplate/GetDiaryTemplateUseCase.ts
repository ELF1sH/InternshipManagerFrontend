import { IGetDiaryTemplatePayload } from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetDiaryTemplateUseCase extends APIUseCase<
  IGetDiaryTemplatePayload,
  File
> { }
