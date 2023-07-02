import { ICompany, AddCompanyRequest } from 'domain/entities/company';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddCompanyUseCase extends APIUseCase<
    AddCompanyRequest,
    ICompany
> { }
