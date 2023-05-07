import {
  action, makeObservable, observable,
} from 'mobx';

import { LoginUseCase } from 'domain/useCases/auth/LoginUseCase';
import { ILoginPayload } from 'domain/entities/auth';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class AuthPageViewModel {
  @observable public pageStatus: LoadStatus = new LoadStatus(false);

  constructor(
    private _loginUseCase: LoginUseCase | null = null,
  ) {
    makeObservable(this);
  }

  @action public async login(username: string, password: string) {
    this.pageStatus.onStartRequest();

    const loginPayload = {
      username,
      password,
    } as ILoginPayload;

    await this._loginUseCase?.fetch({
      payload: loginPayload,
    });

    this.pageStatus.onEndRequest();
  }
}
