import { action, makeObservable, observable } from 'mobx';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';
import { IProfileRespone } from 'domain/repositories/api/interfaces/IProfileRepository';

export class UserStore {
  @observable public profile: IProfileRespone = {
    id: '',
    username: '',
    firstname: '',
    patronymic: '',
    lastname: '',
    role: 'UNVERIFIED_STUDENT',
  };

  @observable public isAuthenticated: boolean = !!tokenRepository.getAccessToken();

  public constructor() {
    makeObservable(this);
  }

  @action public onAuthenticateSuccess = () => {
    this.isAuthenticated = true;
  };

  @action public setCurrentProfile = (response: IProfileRespone) => {
    this.profile = response;
  };
}

export const userStore = new UserStore();
