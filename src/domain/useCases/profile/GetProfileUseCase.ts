import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { IProfileRespone } from 'domain/repositories/api/interfaces/IProfileRepository';

export class GetProfileUseCase extends APIUseCase<
  undefined,
  IProfileRespone
> { }
