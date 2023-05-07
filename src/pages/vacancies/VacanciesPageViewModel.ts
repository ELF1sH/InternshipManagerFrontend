import { makeObservable, observable } from 'mobx';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class VacanciesPageViewModel {
  @observable public pageStatus: LoadStatus = new LoadStatus(true);

  public constructor() {
    makeObservable(this);
  }
}
