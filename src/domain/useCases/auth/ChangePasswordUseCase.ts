import { ApiUseCaseConstructorParams, FetchFunctionParams } from 'domain/useCases/common/types';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { ITokenRepository } from 'domain/repositories/other/interfaces/ITokenRepository';
import {
  IChangePasswordPayload,
  ILoginResponse,
} from 'domain/repositories/api/interfaces/IAuthRepository';

import { ErrorNotificationType, SuccessNotificationType } from 'modules/notification/types';

interface ConstructorParams extends ApiUseCaseConstructorParams<
  IChangePasswordPayload,
  ILoginResponse
> {
  tokenRepository: ITokenRepository;
}

export class ChangePasswordUseCase extends APIUseCase<IChangePasswordPayload, ILoginResponse> {
  protected override errorMessage = ErrorNotificationType.INCORRECT_PASSWORD;

  protected override successMessage = SuccessNotificationType
    .PASSWORD_HAS_BEEN_SUCCESSFULLY_CHANGED;

  private readonly tokenRepository: ITokenRepository;

  public constructor(params: ConstructorParams) {
    super(params);

    this.tokenRepository = params.tokenRepository;
  }

  public fetch = (
    params: FetchFunctionParams<IChangePasswordPayload, ILoginResponse>,
  ): Promise<void> => (
    super.fetch({
      ...params,
      onSuccess: (response) => {
        const authToken = response?.authToken;
        const refreshToken = response?.refreshToken;

        if (authToken) {
          this.tokenRepository?.setAccessToken(authToken);
          this.tokenRepository?.setRefreshToken(refreshToken);
        }

        params.onSuccess?.(response);
      },
    })
  );
}
