import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetIntershipHistoryByIdUseCase extends APIUseCase<
  number,
  IInternshipHistory[]
> { }
