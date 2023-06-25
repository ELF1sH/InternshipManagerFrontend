import { AddStudentRequest, IStudent } from 'domain/entities/student';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddStudentsListUseCase extends APIUseCase<
  AddStudentRequest[],
  IStudent[]
> { }
