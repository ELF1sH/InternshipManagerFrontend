import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

export class LoadStatus {
  @observable private _isLoading: boolean = true;

  @observable private _isFailed: boolean = false;

  public constructor(initialValue: boolean = true) {
    makeObservable(this);

    this.setIsLoading(initialValue);
  }

  @computed public get isLoading(): boolean {
    return this._isLoading;
  }

  @computed public get isFailed(): boolean {
    return this._isFailed;
  }

  @action private setIsLoading(value: boolean) {
    this._isLoading = value;
  }

  @action private setIsFailed(value: boolean) {
    this._isFailed = value;
  }

  public onStartRequest() {
    runInAction(() => {
      this.setIsLoading(true);

      this.setIsFailed(false);
    });
  }

  public onEndRequest(isSuccess: boolean = true) {
    runInAction(() => {
      this.setIsLoading(false);

      this.setIsFailed(!isSuccess);
    });
  }
}
