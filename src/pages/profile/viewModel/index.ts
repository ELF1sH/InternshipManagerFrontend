import { action, makeObservable, observable } from 'mobx';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { IDiary } from 'domain/entities/diary';
import { IUser } from 'domain/entities/user';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class ProfilePageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public profile: IUser | undefined;

  @observable public diaries: IDiary[] = [];

  public constructor(
    private _getProfile: GetProfileUseCase,
    private _getDiaries: GetDiariesListUseCase,
  ) {
    makeObservable(this);
  }

  @action public initRequests = () => {
    Promise.all([this.getProfile(), this.getDiaries()])
      .then(() => {
        this.pageStatus.onEndRequest();
      })
      .catch(() => {
        this.pageStatus.onEndRequest(false);
      });
  };

  @action private getProfile = () => this._getProfile.fetch({
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

  @action private getDiaries = () => this._getDiaries.fetch({
    payload: undefined,
    onSuccess: (diaries) => {
      this.diaries = diaries;
      this.pageStatus.onEndRequest();
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });
}
