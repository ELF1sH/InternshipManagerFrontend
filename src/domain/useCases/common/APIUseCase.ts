import { AxiosError } from 'axios';

import { ApiUseCaseConstructorParams, FetchFunctionParams } from 'domain/useCases/common/types';

import {
  ErrorNotificationType,
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
  SuccessNotificationType,
} from 'modules/notification/types';

export abstract class APIUseCase<RequestPayloadType, ResponseType> {
  private requestCallback: (payload: RequestPayloadType) => Promise<ResponseType>;

  private readonly notifyError?: ShowErrorFunction;

  private notifySuccess?: ShowSuccessNotificationFunction;

  protected readonly errorMessage: ErrorNotificationType = ErrorNotificationType
    .FAILED_TO_FETCH_DATA;

  protected readonly successMessage: SuccessNotificationType = SuccessNotificationType
    .CHANGES_SUCCESSFULLY_SAVED;

  public constructor(params: ApiUseCaseConstructorParams<RequestPayloadType, ResponseType>) {
    this.requestCallback = params.requestCallback;

    this.notifyError = params.notifyError;
    this.notifySuccess = params.notifySuccess;
  }

  public fetch({
    payload,
    onSuccess,
    onError,
  }: FetchFunctionParams<RequestPayloadType, ResponseType>): Promise<void> {
    return this.requestCallback(payload)
      .then((data: ResponseType) => {
        this.notifySuccess?.(this.successMessage);

        onSuccess?.(data);
      })
      .catch((e: AxiosError) => {
        this.notifyError?.(this.errorMessage);

        onError?.(e);
      });
  }
}
