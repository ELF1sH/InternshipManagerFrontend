import { ISelection } from 'domain/entities/selection';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddToSelectionsUseCase extends APIUseCase<
  number,
  ISelection
> { }
