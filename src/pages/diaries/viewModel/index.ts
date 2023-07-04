import {
  action, computed, makeObservable, observable,
} from 'mobx';
import dayjs from 'dayjs';

import { IDiary, IDiaryStatus } from 'domain/entities/diary';
import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class DiariesPageViewModel {
  @observable public pageStatus = new LoadStatus();

  @observable public diaries: IDiary[] = [];

  public constructor(
    private _getDiariesList: GetDiariesListUseCase,
  ) {
    makeObservable(this);
  }

  @observable public nameSearchString: string = '';

  @action public setNameSearchString = (val: string) => {
    this.nameSearchString = val.toLowerCase().trim();
  };

  @observable public commentSearchString: string = '';

  @action public setCommentSearchString = (val: string) => {
    this.commentSearchString = val.toLowerCase().trim();
  };

  @observable public searchStatus: IDiaryStatus | undefined;

  @action public setSearchStatus = (val?: IDiaryStatus) => {
    this.searchStatus = val;
  };

  @observable public dateSearchRange: [dayjs.Dayjs, dayjs.Dayjs] | null = null;

  @action public setDateSearchRange = (val: [dayjs.Dayjs, dayjs.Dayjs] | null) => {
    this.dateSearchRange = val;
  };

  @computed public get filtredDiaries(): Promise<IDiary[]> {
    let filtredDiaries = this.diaries?.filter((val) => val.filename?.toLowerCase().trim()
      .includes(this.nameSearchString));

    filtredDiaries = filtredDiaries?.filter((val) => `${val.review}`.toLowerCase().trim()
      .includes(this.commentSearchString));

    filtredDiaries = filtredDiaries?.filter((val) => {
      if (this.searchStatus === undefined) return true;
      return val.status === this.searchStatus;
    });

    filtredDiaries = filtredDiaries?.filter((val) => {
      if (this.dateSearchRange === null) return true;
      const time = dayjs(val.uploadDate, 'DD.MM.YYYY');
      return time.isAfter(this.dateSearchRange[0]) && time.isBefore(this.dateSearchRange[1]);
    });

    return new Promise((resolve) => {
      setTimeout(() => resolve(filtredDiaries), 400);
    });
  }

  @action public initRequests = () => {
    Promise.all([this.getDiaries()])
      .then(() => {
        this.pageStatus.onEndRequest();
      })
      .catch(() => {
        this.pageStatus.onEndRequest(false);
      });
  };

  @action private getDiaries = () => this._getDiariesList.fetch({
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
