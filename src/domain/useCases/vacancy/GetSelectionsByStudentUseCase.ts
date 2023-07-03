import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import {
  IGetSelectionsByStudentPayload,
  IGetSelectionsListResponse,
} from 'domain/repositories/api/interfaces/IVacancyRepository';

export class GetSelectionsByStudentUseCase extends APIUseCase<
  IGetSelectionsByStudentPayload,
  IGetSelectionsListResponse
> { }
