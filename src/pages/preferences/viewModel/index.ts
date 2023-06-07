import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { GetPreferencesListUseCase } from 'domain/useCases/preferences/GetPreferencesListUseCase';
import { IPreferenceItem } from 'domain/entities/preferences';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

import compareObjects from 'utils/compareObjects';

export class PreferencesPageViewModel {
  @observable private _preferencesList: IPreferenceItem[] = [];

  @observable public preferencesListEdited: IPreferenceItem[] = [];

  @observable public pageStatus = new LoadStatus(true);

  public constructor(
    private _getPreferences: GetPreferencesListUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get preferencesList() {
    return this.preferencesListEdited;
  }

  @computed public get wasEdited() {
    return !compareObjects(this._preferencesList, this.preferencesListEdited);
  }

  @action public getPreferences = () => this._getPreferences.fetch({
    payload: undefined,
    onSuccess: (preferences) => {
      this._preferencesList = preferences;
      this.preferencesListEdited = preferences;
      this.pageStatus.onEndRequest();
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action public setUpdatedPreferenceList = (newOrder: IPreferenceItem[]) => {
    this.preferencesListEdited = newOrder;
  };
}
