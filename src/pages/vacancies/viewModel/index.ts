import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { IVacancy } from 'domain/entities/vacancy';
import { ICompany } from 'domain/entities/company';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { GetCompanyListUseCase } from 'domain/useCases/company/GetCompanyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class VacanciesPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  private companiesList: ICompany[] = [];

  private vacanciesList: IVacancy[] = [];

  private selectionsList?: any[] = [];

  public constructor(
    private _getCompanies: GetCompanyListUseCase,
    private _getVacancies: GetVacancyListUseCase,
    private _addVacany: AddVacancyUseCase,
    private _editVacany: AddVacancyUseCase,
    private _addToSelections: AddVacancyUseCase,
    private _getSelections: AddVacancyUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get companiesWithVacancies() {
    return this.companiesList.map(({ id, name }) => {
      const vacancies = this.vacanciesList.filter((vac) => vac.company.id === id);

      const minQuantity = vacancies.reduce((acc, cur) => acc + cur.minimumQuality, 0);
      const maxQuantity = vacancies.reduce((acc, cur) => acc + cur.maximumQuality, 0);

      const vacancyNames = vacancies.map((vac) => vac.name);
      const uniqueVacancyNames = Array.from(new Set(vacancyNames));

      const groupedVacancies = uniqueVacancyNames.map((uniqueName) => ({
        name: uniqueName,
        vacancies: vacancies.filter(({ name }) => name === uniqueName).map((vacancy) => ({
          ...vacancy,
          isSelected: this.selectionsList?.find((sel) => sel.vacancy.id === vacancy.id),
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
    const { profile } = userStore;

    const required = [this.getCompanies(), this.getVacancies()];
    if (profile.role === 'STUDENT') {
      required.push(this.getSelections());
    }

    Promise.all(required)
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

  @action private getCompanies = () => this._getCompanies.fetch({
    payload: undefined,
    onSuccess: (companies) => { this.companiesList = companies; },
    onError: () => { throw new Error(); },
  });

  @action private getVacancies = () => this._getVacancies.fetch({
    payload: undefined,
    onSuccess: (vacancies) => { this.vacanciesList = vacancies; },
    onError: () => { throw new Error(); },
  });

  @action private getSelections = () => this._getSelections.fetch({
    payload: undefined,
    onSuccess: (selectionsList) => { this.selectionsList = selectionsList; },
    onError: () => { throw new Error(); },
  });

  @action public addNewWacancy = (payload: any) => this._addVacany.fetch({
    payload,
    onSuccess: (vacancies) => { this.vacanciesList = vacancies; },
    onError: () => { throw new Error(); },
  });

  @action public editVacancy = (payload: any) => this._addVacany.fetch({
    payload,
    onSuccess: (vacancies) => { this.vacanciesList = vacancies; },
    onError: () => { throw new Error(); },
  });

  @action public addToSelections = (payload: any) => this._addToSelections.fetch({
    payload,
    onSuccess: () => { },
    onError: () => { throw new Error(); },
  });
}
