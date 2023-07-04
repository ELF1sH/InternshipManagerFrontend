import {
  IGetCompanyPayload,
  IGetCompanyResponse,
} from 'domain/repositories/api/interfaces/ICompanyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetCompanyUseCase extends APIUseCase<
  IGetCompanyPayload,
  IGetCompanyResponse
> { }
