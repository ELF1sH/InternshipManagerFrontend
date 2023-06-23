import { action, makeObservable, observable } from 'mobx';

import { IUser } from 'domain/entities/user';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class ProfilePageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public profile: IUser | undefined;

  public constructor(
    private _getProfile: GetProfileUseCase,
  ) {
    makeObservable(this);
  }

  @action public getPreferences = () => this._getProfile.fetch({
    payload: undefined,
    onSuccess: (profile) => {
      console.log(profile);
      this.profile = profile;
      this.pageStatus.onEndRequest();
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });
}
