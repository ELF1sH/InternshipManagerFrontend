import { APIUseCase } from 'domain/useCases/common/APIUseCase';

export class PostIntershipUseCase extends APIUseCase<
  {companyName: string, semester: number},
  void
> { }
