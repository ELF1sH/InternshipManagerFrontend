import { NavigateFunction } from 'react-router-dom';

import { ApiUseCaseConstructorParams, FetchFunctionParams } from 'domain/useCases/common/types';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { ITokenRepository } from 'domain/repositories/other/interfaces/ITokenRepository';
import { ILoginPayload, ILoginResponse } from 'domain/repositories/api/interfaces/IAuthRepository';

import { ErrorNotificationType } from 'modules/notification/types';

interface ConstructorParams extends ApiUseCaseConstructorParams<ILoginPayload, ILoginResponse> {
  tokenRepository: ITokenRepository;
  navigate: NavigateFunction;
}

export class LoginUseCase extends APIUseCase<ILoginPayload, ILoginResponse> {
  protected override errorMessage: ErrorNotificationType = ErrorNotificationType
    .INCORRECT_LOGIN_OR_PASSWORD;

  private readonly tokenRepository: ITokenRepository;

  private readonly navigate: NavigateFunction;

  public constructor(params: ConstructorParams) {
    super(params);

    this.tokenRepository = params.tokenRepository;
    this.navigate = params.navigate;
  }

  public fetch = (
    params: FetchFunctionParams<ILoginPayload, ILoginResponse>,
  ): Promise<void> => (
    super.fetch({
      ...params,
      onSuccess: (response) => {
        const accessToken = response?.accessToken;

        if (accessToken) {
          this.tokenRepository?.setAccessToken(accessToken);

          this.navigate('/vacancies');
        }

        params.onSuccess?.(response);
      },
    })
  );
}
