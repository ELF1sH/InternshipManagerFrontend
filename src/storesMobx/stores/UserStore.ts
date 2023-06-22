import { action, makeObservable, observable } from 'mobx';
// eslint-disable-next-line import/no-named-default
import { default as jwtDecode } from 'jwt-decode';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { UserRole, UserRoleBackend } from 'modules/authority/enums/UserRole';

import { IDecodedJWT } from 'utils/interfaces/IDecodedJWT';

export class UserStore {
  @observable public role: UserRole = UserRole.STUDENT;

  @observable public isAuthenticated: boolean = !!tokenRepository.getAccessToken();

  public constructor() {
    makeObservable(this);

    const accessToken = tokenRepository.getAccessToken();

    if (accessToken) {
      const decoded = jwtDecode(tokenRepository.getAccessToken() ?? '') as IDecodedJWT;
      this.setRole(decoded.role);
    }
  }

  @action public onAuthenticateSuccess = () => {
    this.isAuthenticated = true;
  };

  @action public setRole = (role: UserRoleBackend) => {
    switch (role) {
      case UserRoleBackend.ADMIN:
        this.role = UserRole.UNIVERSITY_DEPARTMENT;
        break;
      case UserRoleBackend.DEAN:
        this.role = UserRole.UNIVERSITY_DEPARTMENT;
        break;

      case UserRoleBackend.UNVERIFIED_STUDENT:
        this.role = UserRole.STUDENT;
        break;
      case UserRoleBackend.STUDENT:
        this.role = UserRole.STUDENT;
        break;

      case UserRoleBackend.COMPANY:
        this.role = UserRole.COMPANY;
        break;

      default:
        this.role = UserRole.STUDENT;
    }
  };
}

export const userStore = new UserStore();
