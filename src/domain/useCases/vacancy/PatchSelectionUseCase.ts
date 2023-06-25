import { IPatchSelectionPayload } from 'domain/repositories/api/interfaces/IVacancyRepository';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';

import { ErrorNotificationType, SuccessNotificationType } from 'modules/notification/types';

export class PatchSelectionUseCase extends APIUseCase<
  IPatchSelectionPayload,
  any
> {
  protected override errorMessage = ErrorNotificationType.FAILED_TO_UPDATE_STATUS;

  protected override successMessage = SuccessNotificationType.SUCCESSFULLY_UPDATED_STATUS;
}
