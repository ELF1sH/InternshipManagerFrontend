import { IAddStudentResponse, IAddStudentsListPayload } from 'domain/repositories/api/interfaces/IStudentsRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddStudentsListUseCase extends APIUseCase<
  IAddStudentsListPayload,
  IAddStudentResponse[]
> { }
