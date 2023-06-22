import { action, makeObservable, observable } from 'mobx';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { UserRole, UserRoleBackend } from 'modules/authority/enums/UserRole';

export class UserStore {
  @observable public role: UserRole = UserRole.UNIVERSITY_DEPARTMENT;

  @observable public isAuthenticated: boolean = !!tokenRepository.getAccessToken();

  public constructor() {
    makeObservable(this);
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
      case UserRoleBackend.COMPANY:
        this.role = UserRole.COMPANY;
        break;
      default:
        this.role = UserRole.STUDENT;
    }
  };
}

export const userStore = new UserStore();
