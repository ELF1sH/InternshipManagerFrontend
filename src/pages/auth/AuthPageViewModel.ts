import {
  action, makeObservable, observable, runInAction,
} from 'mobx';

import { LoginUseCase } from 'domain/useCases/auth/LoginUseCase';
import { ILoginPayload } from 'domain/entities/auth';

import { UserStore } from 'storesMobx/stores/UserStore';
import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class AuthPageViewModel {
  @observable public pageStatus: LoadStatus = new LoadStatus(false);

  constructor(
    private _loginUseCase: LoginUseCase,
    private _userStore: UserStore,
  ) {
    makeObservable(this);
  }

  @action public async login(username: string, password: string) {
    this.pageStatus.onStartRequest();

    const loginPayload = {
      username,
      password,
    } as ILoginPayload;

    await this._loginUseCase.fetch({
      payload: loginPayload,
      onSuccess: this.onLoginSuccess,
      onError: this.onLoginFail,
    });

    this.pageStatus.onEndRequest();
  }

  @action private onLoginSuccess = () => {
    this.pageStatus.onEndRequest(true);

    runInAction(() => {
      this._userStore.onAuthenticateSuccess();
    });
  };

  @action private onLoginFail = () => {
    this.pageStatus.onEndRequest(false);
  };
}
