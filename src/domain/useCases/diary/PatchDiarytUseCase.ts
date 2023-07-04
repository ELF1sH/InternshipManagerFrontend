import { IDiary, IDiaryStatus } from 'domain/entities/diary';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class PatchDiaryUseCase extends APIUseCase<
  PatchDiaryUseCasePayload,
  IDiary
> { }

export type PatchDiaryUseCasePayload = {
  id: number,
  review?: string,
  status?: IDiaryStatus
}
