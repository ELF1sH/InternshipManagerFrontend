import { AxiosError } from 'axios';

import {
  ShowErrorFunction,
  ShowSuccessNotificationFunction,
} from 'modules/notification/types';

export interface ApiUseCaseConstructorParams<RequestPayloadType, ResponseType> {
  requestCallback: (payload: RequestPayloadType) => Promise<ResponseType>;
  notifyError?: ShowErrorFunction;
  notifySuccess?: ShowSuccessNotificationFunction;
}

export interface FetchFunctionParams<RequestPayloadType, ResponseType> {
  payload: RequestPayloadType;
  onSuccess?: (response: ResponseType) => void;
  onError?: (error: AxiosError) => void;
}
