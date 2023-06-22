import { action, makeObservable, observable } from 'mobx';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { UserRole } from 'modules/authority/enums/UserRole';

export class UserStore {
  @observable public role: UserRole = UserRole.COMPANY;

  @observable public isAuthenticated: boolean = !!tokenRepository.getAccessToken();

  public constructor() {
    makeObservable(this);
  }

  @action public onAuthenticateSuccess = () => {
    this.isAuthenticated = true;
  };
}

export const userStore = new UserStore();
