import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { PatchPreferencesListUseCase } from 'domain/useCases/preferences/PatchPreferencesListUseCase';
import { DeletePreferencesListUseCase } from 'domain/useCases/preferences/DeletePreferencesListUseCase';
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
    private _patchPreference: PatchPreferencesListUseCase,
    private _deletePreference: DeletePreferencesListUseCase,
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
      runInAction(() => {
        const sortedPreferences = preferences.sort((a, b) => a.orderNumber - b.orderNumber);

        this._preferencesList = sortedPreferences;
        this.preferencesListEdited = sortedPreferences;
        this.pageStatus.onEndRequest();
      });
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action public setUpdatedPreferenceList = (newOrder: IPreferenceItem[]) => {
    this.preferencesListEdited = newOrder;
  };

  @action public deletePreference = (deleteId: number) => {
    this.preferencesListEdited = this.preferencesListEdited.filter(({ id }) => id !== deleteId);
  };

  public onSaveChanges = async () => {
    const deletedPreferencesIds = this._preferencesList
      .filter((pref) => (
        !this.preferencesListEdited.find((prefEdited) => pref.id === prefEdited.id)
      ))
      .map((x) => x.id);

    const promisesToDelete = deletedPreferencesIds.map((id) => (
      this._deletePreference.fetch({ payload: { id } })
    ));

    const promisesToPatch = this.preferencesListEdited.map((pref, idx) => (
      this._patchPreference.fetch({
        payload: {
          id: pref.id,
          vacancyId: pref.vacancy.id,
          orderNumber: idx,
        },
      })
    ));

    Promise.all([...promisesToDelete, ...promisesToPatch]).then(() => {
      this.getPreferences();
    });
  };
}
