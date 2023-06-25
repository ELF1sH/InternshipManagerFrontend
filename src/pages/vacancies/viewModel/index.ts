import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { SelectionStatus } from 'domain/entities/selection';
import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { PostPreferenceUseCase } from 'domain/useCases/preferences/PostPreferenceUseCase';
import { IPreferenceItem } from 'domain/entities/preferences';
import { GetPreferencesListUseCase } from 'domain/useCases/preferences/GetPreferencesListUseCase';
import { IVacancy } from 'domain/entities/vacancy';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';
import { EditVacancyUseCase } from 'domain/useCases/vacancy/EditVacancyUseCase';

import { UserRole } from 'modules/authority/enums/UserRole';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class VacanciesPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable private vacanciesList: IVacancy[] = [];

  @observable private selectionsList?: any[] = [];

  @observable private preferencesList?: IPreferenceItem[] = [];

  public constructor(
    private _getVacancies: GetVacancyListUseCase,
    private _addVacany: AddVacancyUseCase,
    private _addToSelections: AddVacancyUseCase,
    private _getSelections: AddVacancyUseCase,
    private _editVacany: EditVacancyUseCase,
    private _deleteVacancy: EditVacancyUseCase,
    private _getPreferences: GetPreferencesListUseCase,
    private _postPreference: PostPreferenceUseCase,
    private _patchSelection: PatchSelectionUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get companiesWithVacancies(): CompanyWithVacancies[] {
    const companies = this.vacanciesList.map((vacancy) => vacancy.company);
    const uniqueIDs = Array.from(new Set(companies.map((company) => company.id)));
    const companiesList = uniqueIDs.map((id) => companies.find((company) => company.id === id)!);

    return companiesList.map(({ id, name }) => {
      const vacancies = this.vacanciesList.filter((vac) => vac.company.id === id);

      const minQuantity = vacancies.reduce((acc, cur) => acc + cur.minimumQuantity, 0);
      const maxQuantity = vacancies.reduce((acc, cur) => acc + cur.maximumQuantity, 0);

      const vacancyNames = vacancies.map((vac) => vac.name);
      const uniqueVacancyNames = Array.from(new Set(vacancyNames));

      const groupedVacancies = uniqueVacancyNames.map((uniqueName) => ({
        name: uniqueName,
        vacancies: vacancies.filter(({ name }) => name === uniqueName).map((vacancy) => ({
          ...vacancy,
          isSelected: this.selectionsList?.find((sel) => sel.vacancy.id === vacancy.id),
          isPreferenced: this.preferencesList?.find((pref) => pref.vacancy.id === vacancy.id),
        })),
      }));

      return {
        id,
        name,
        vacancies: groupedVacancies,
        minQuantity,
        maxQuantity,
      };
    });
  }

  @action public initRequests = () => {
    const { role } = userStore;
    const required = [this.getVacancies()];
    if (role === UserRole.STUDENT) {
      required.push(this.getSelections(), this.getPreferences());
    }

    Promise.all(required)
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

  @action private getVacancies = () => this._getVacancies.fetch({
    payload: undefined,
    onSuccess: (vacancies) => {
      runInAction(() => {
        this.vacanciesList = vacancies;
      });
    },
    onError: () => { throw new Error(); },
  });

  @action private getSelections = () => this._getSelections.fetch({
    payload: undefined,
    onSuccess: (selectionsList) => {
      runInAction(() => {
        this.selectionsList = selectionsList;
      });
    },
    onError: () => { throw new Error(); },
  });

  @action private getPreferences = () => this._getPreferences.fetch({
    payload: undefined,
    onSuccess: (preferences) => {
      runInAction(() => {
        this.preferencesList = preferences;
      });
    },
    onError: () => { throw new Error(); },
  });

  @action public addNewWacancy = (payload: any) => this._addVacany.fetch({
    payload,
    onSuccess: (vacancies) => { },
    onError: () => { throw new Error(); },
  });

  @action public editVacancy = (payload: any) => this._editVacany.fetch({
    payload,
    onSuccess: (vacancies) => { },
    onError: () => { throw new Error(); },
  });

  @action public deleteVacancy = (payload: any) => this._deleteVacancy.fetch({
    payload,
    onSuccess: (vacancies) => { },
    onError: () => { throw new Error(); },
  });

  @action public addToSelections = (payload: any) => this._addToSelections.fetch({
    payload,
    onSuccess: () => { this.initRequests(); },
    onError: () => { throw new Error(); },
  });

  @action public postPreference = (id: number) => this._postPreference.fetch({
    payload: { vacancyId: id },
    onSuccess: () => { this.initRequests(); },
    onError: () => { throw new Error(); },
  });

  @action public patchSelection = (id: number, status: SelectionStatus) => (
    this._patchSelection.fetch({
      payload: { id, status },
      onSuccess: () => { this.initRequests(); },
      onError: () => { throw new Error(); },
    })
  );
}
