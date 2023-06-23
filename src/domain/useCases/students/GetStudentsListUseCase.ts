import { IStudent } from 'domain/entities/student';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetStudentsListUseCase extends APIUseCase<
  undefined,
  IStudent[]
> { }
