import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { ICompany } from 'domain/entities/company';
import { IVacancy } from 'domain/entities/vacancy';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class VacanciesPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  private vacanciesList: IVacancy[] = [];

  private companiesList: ICompany[] = [];

  public constructor(
    private _getVacancies: GetVacancyListUseCase,
    private _addVacancy: AddVacancyUseCase,
    private _editVacancy: AddVacancyUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get companiesWithVacancies(): CompanyWithVacancies[] {
    const companies = this.vacanciesList.map((vacancy) => vacancy.company);
    const uniqueIDs = Array.from(new Set(companies.map((company) => company.id)));
    this.companiesList = uniqueIDs.map((id) => companies.find((company) => company.id === id)!);

    return this.companiesList.map(({ id, name }) => {
      const vacancies = this.vacanciesList.filter((vac) => vac.company.id === id);

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

  @action public getVacancies = () => this._getVacancies.fetch({
    payload: undefined,
    onSuccess: (vacancies) => {
      this.vacanciesList = vacancies;

      this.pageStatus.onEndRequest();
    },
    onError: () => this.pageStatus.onEndRequest(false),
  });

  @action public addNewWacancy = (payload: any) => this._addVacancy.fetch({
    payload,
    onSuccess: (vacancies) => { this.vacanciesList = vacancies; },
    onError: () => { throw new Error(); },
  });

  @action public editVacancy = (payload: any) => this._addVacancy.fetch({
    payload,
    onSuccess: (vacancies) => { this.vacanciesList = vacancies; },
    onError: () => { throw new Error(); },
  });
}
