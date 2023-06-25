import { IVacancy } from 'domain/entities/vacancy';
import { ICreateOrEditVacancyPayload } from 'domain/repositories/api/interfaces/IVacancyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class AddVacancyUseCase extends APIUseCase<
  ICreateOrEditVacancyPayload,
  IVacancy
> { }
