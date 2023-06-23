import {
  action, makeObservable, observable,
} from 'mobx';

import { GetProfileUseCase } from 'domain/useCases/profile/GetProfileUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class ProfileViewModel {
  @observable public pageStatus = new LoadStatus(true);

  public constructor(
    private _getProfile: GetProfileUseCase,
  ) {
    makeObservable(this);
  }

  @action public initRequests = () => {
    Promise.all([this.getProfile()])
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

  @action private getProfile = () => this._getProfile.fetch({
    payload: undefined,
    onSuccess: (profile) => { userStore.setRole(profile.role); },
    onError: () => { throw new Error(); },
  });
}
