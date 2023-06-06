import { action, makeObservable, observable } from 'mobx';

import { UserRole } from 'modules/authority/enums/UserRole';

export class UserStore {
  @observable public role: UserRole = UserRole.STUDENT;

  @observable public isAuthenticated: boolean = true;

  public constructor() {
    makeObservable(this);
  }

  @action public onAuthenticateSuccess = () => {
    this.isAuthenticated = true;
  };
}

export const userStore = new UserStore();
