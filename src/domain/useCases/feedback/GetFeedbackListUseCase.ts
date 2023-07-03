import { IFeedback } from 'domain/entities/feedback';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetFeedbackListUseCase extends APIUseCase<
  {studentId: number},
  IFeedback[]
> { }
