import { IGetCandidatesListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetCandidateListUseCase extends APIUseCase<
  undefined,
  IGetCandidatesListResponse
> { }
