import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { IPostPreferencePayload } from 'domain/repositories/api/interfaces/IPreferencesRepository';

import { ErrorNotificationType, SuccessNotificationType } from 'modules/notification/types';

export class PostPreferenceUseCase extends APIUseCase<
  IPostPreferencePayload,
  void
> {
  protected override errorMessage = ErrorNotificationType.FAILED_TO_ADD_TO_PREFERENCE_LIST;

  protected override successMessage = SuccessNotificationType.SUCCESSFULLY_ADDED_TO_PREFERENCE_LIST;
}
