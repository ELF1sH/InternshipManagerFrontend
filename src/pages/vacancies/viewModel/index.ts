import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { IVacancy } from 'domain/entities/vacancy';
import { ICompany } from 'domain/entities/company';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { GetCompanyListUseCase } from 'domain/useCases/company/GetCompanyListUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class VacanciesPageViewModel {
  @observable public pageStatus: LoadStatus = new LoadStatus(true);

  private companiesList: ICompany[] = [];

  private vacanciesList: IVacancy[] = [];

  public constructor(
    private _getCompanies: GetCompanyListUseCase,
    private _getVacancies: GetVacancyListUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get companiesWithVacancies() {
    return this.companiesList.map(({ id, name }) => {
      const vacancies = this.vacanciesList.filter((vac) => vac.companyId === id);

      const minQuantity = vacancies.reduce((acc, cur) => acc + cur.minimumQuantity, 0);
      const maxQuantity = vacancies.reduce((acc, cur) => acc + cur.maximumQuantity, 0);

      const vacancyNames = vacancies.map((vac) => vac.name);
      const uniqueVacancyNames = Array.from(new Set(vacancyNames));

      const groupedVacancies = uniqueVacancyNames.map((uniqueName) => ({
        name: uniqueName,
        vacancies: vacancies.filter(({ name }) => name === uniqueName),
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
    Promise.all([this.getCompanies(), this.getVacancies()])
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
}
