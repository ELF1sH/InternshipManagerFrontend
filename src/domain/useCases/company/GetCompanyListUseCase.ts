import { IGetCompanyListResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetCompanyListUseCase extends APIUseCase<
  undefined,
  IGetCompanyListResponse
> { }
