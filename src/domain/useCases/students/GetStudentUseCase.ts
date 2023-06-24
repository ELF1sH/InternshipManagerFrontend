import { IStudent } from 'domain/entities/student';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetStudentUseCase extends APIUseCase<
  { id: number },
  IStudent
> { }
