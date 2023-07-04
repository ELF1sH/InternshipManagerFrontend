import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class PatchIntershipHistoryByVacancyUseCase extends APIUseCase<
  {vacancyId: number, semester: number},
  void
> { }
