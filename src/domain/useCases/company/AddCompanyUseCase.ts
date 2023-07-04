import { ICreateCompanyPayload, ICreateCompanyResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddCompanyUseCase extends APIUseCase<
  ICreateCompanyPayload,
  ICreateCompanyResponse
> { }
