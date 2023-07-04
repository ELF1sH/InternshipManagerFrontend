import {
  IPostDiaryTemplatePayload,
} from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class PostDiaryTemplateUseCase extends APIUseCase<
  IPostDiaryTemplatePayload,
  undefined
> { }
