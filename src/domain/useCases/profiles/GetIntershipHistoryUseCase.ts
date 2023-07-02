import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetIntershipHistoryUseCase extends APIUseCase<
  undefined,
  IInternshipHistory[]
> { }
