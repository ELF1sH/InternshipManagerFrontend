import { IUser } from 'domain/entities/user';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class GetProfileUseCase extends APIUseCase<
  undefined,
  IUser
> { }
