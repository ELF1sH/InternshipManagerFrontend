import { NavigateFunction } from 'react-router-dom';
// eslint-disable-next-line import/no-named-default
import { default as jwtDecode } from 'jwt-decode';

import { ApiUseCaseConstructorParams, FetchFunctionParams } from 'domain/useCases/common/types';
import { APIUseCase } from 'domain/useCases/common/APIUseCase';
import { ITokenRepository } from 'domain/repositories/other/interfaces/ITokenRepository';
import { ILoginPayload, ILoginResponse } from 'domain/repositories/api/interfaces/IAuthRepository';

import { UserRoleBackend } from 'modules/authority/enums/UserRole';
import { ErrorNotificationType } from 'modules/notification/types';

import { UserStore } from 'storesMobx/stores/UserStore';

import { IDecodedJWT } from 'utils/interfaces/IDecodedJWT';

interface ConstructorParams extends ApiUseCaseConstructorParams<ILoginPayload, ILoginResponse> {
  tokenRepository: ITokenRepository;
  navigate: NavigateFunction;
  userStore: UserStore;
}

export class LoginUseCase extends APIUseCase<ILoginPayload, ILoginResponse> {
  protected override errorMessage: ErrorNotificationType = ErrorNotificationType
    .INCORRECT_LOGIN_OR_PASSWORD;

  private readonly tokenRepository: ITokenRepository;

  private readonly navigate: NavigateFunction;

  private readonly userStore: UserStore;

  public constructor(params: ConstructorParams) {
    super(params);

    this.tokenRepository = params.tokenRepository;
    this.navigate = params.navigate;
    this.userStore = params.userStore;
  }

  public fetch = (
    params: FetchFunctionParams<ILoginPayload, ILoginResponse>,
  ): Promise<void> => (
    super.fetch({
      ...params,
      onSuccess: (response) => {
        const authToken = response?.authToken;
        const refreshToken = response?.refreshToken;

        const decoded = jwtDecode(authToken) as IDecodedJWT;

        this.userStore.setRole(decoded.role);

        if (authToken) {
          this.tokenRepository?.setAccessToken(authToken);
          this.tokenRepository?.setRefreshToken(refreshToken);

          switch (decoded.role) {
            case UserRoleBackend.UNVERIFIED_STUDENT:
              this.navigate('/profile');
              break;
            case UserRoleBackend.COMPANY:
              this.navigate('/vacancies');
              break;
            case UserRoleBackend.DEAN:
              this.navigate('/students');
              break;
            default:
              this.navigate('/vacancies');
          }
        }

        params.onSuccess?.(response);
      },
    })
  );
}
