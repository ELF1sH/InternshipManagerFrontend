import {
  action, makeObservable, observable, runInAction,
} from 'mobx';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { IDiary } from 'domain/entities/diary';
import { IUser } from 'domain/entities/user';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';
import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { GetIntershipHistoryUseCase } from 'domain/useCases/profiles/GetIntershipHistoryUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class ProfilePageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public profile: IUser | undefined;

  @observable public diaries: IDiary[] = [];

  @observable public internshipHistory: IInternshipHistory[] = [];

  public constructor(
    private _getProfile: GetProfileUseCase,
    private _getDiaries: GetDiariesListUseCase,
    private _getInternshipHistory: GetIntershipHistoryUseCase,
  ) {
    makeObservable(this);
  }

  @action public initRequests = () => {
    Promise.all([this.getProfile(), this.getDiaries(), this.getInternshipHistory()])
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

  @action private getInternshipHistory = () => this._getInternshipHistory.fetch({
    payload: undefined,
    onSuccess: (internshipHistory) => {
      runInAction(() => {
        this.internshipHistory = internshipHistory.sort((a, b) => a.orderNumber - b.orderNumber);
        this.pageStatus.onEndRequest();
      });
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });
}
