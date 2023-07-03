import { IDiaryTemplate } from 'domain/entities/diaryTemplate';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetDiaryTemplatesListUseCase extends APIUseCase<
  undefined,
  IDiaryTemplate[]
> { }
