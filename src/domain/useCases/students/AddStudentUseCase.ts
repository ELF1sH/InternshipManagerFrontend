import { IAddStudentPayload, IAddStudentResponse } from 'domain/repositories/api/interfaces/IStudentsRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddStudentUseCase extends APIUseCase<
  IAddStudentPayload,
  IAddStudentResponse
> { }
