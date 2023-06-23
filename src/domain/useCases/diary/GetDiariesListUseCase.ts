import { IDiary } from 'domain/entities/diary';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetDiariesListUseCase extends APIUseCase<
  undefined,
  IDiary[]
> { }
