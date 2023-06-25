import {
  action, computed, makeObservable, observable, runInAction, toJS,
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
        this._preferencesList = preferences;
        this.preferencesListEdited = preferences;
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
    console.log(toJS(this._preferencesList));
    console.log(toJS(this.preferencesListEdited));

    const deletedPreferencesIds = this._preferencesList
      .filter((pref) => (
        !this.preferencesListEdited.find((prefEdited) => pref.id === prefEdited.id)
      ))
      .map((x) => x.id);

    console.log(deletedPreferencesIds);

    deletedPreferencesIds.forEach((id) => {
      (async () => {
        await this._deletePreference.fetch({ payload: { id } });
      })();
    });

    this.preferencesListEdited.forEach((pref, idx) => {
      const initialPref = this._preferencesList.find((initPref) => initPref.id === pref.id)!;

      if (initialPref.orderNumber === idx + 1) return;

      (async () => {
        await this._patchPreference.fetch({
          payload: {
            id: pref.id,
            vacancyId: pref.vacancy.id,
            orderNumber: idx + 1,
          },
        });
      })();
    });

    await this.getPreferences();
  };
}
