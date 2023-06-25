import { AddStudentRequest, IStudent } from 'domain/entities/student';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddStudentUseCase extends APIUseCase<
  AddStudentRequest,
  IStudent
> { }
