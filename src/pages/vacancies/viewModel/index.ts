import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { ICompany } from 'domain/entities/company';
import { IVacancy } from 'domain/entities/vacancy';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';

import { UserRole } from 'modules/authority/enums/UserRole';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class VacanciesPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  private vacanciesList: IVacancy[] = [];

  private selectionsList?: any[] = [];

  private companiesList: ICompany[] = [];

  public constructor(
    private _getVacancies: GetVacancyListUseCase,
    private _addVacany: AddVacancyUseCase,
    private _addToSelections: AddVacancyUseCase,
    private _getSelections: AddVacancyUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get companiesWithVacancies(): CompanyWithVacancies[] {
    const companies = this.vacanciesList.map((vacancy) => vacancy.company);
    const uniqueIDs = Array.from(new Set(companies.map((company) => company.id)));
    this.companiesList = uniqueIDs.map((id) => companies.find((company) => company.id === id)!);

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
    const { role } = profile;
    const required = [this.getVacancies()];
    if (role === UserRole.STUDENT) {
      required.push(this.getSelections());
    }

    Promise.all(required)
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

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

  @action public addToSelections = (payload: any) => this._addToSelections.fetch({
    payload,
    onSuccess: () => { },
    onError: () => { throw new Error(); },
  });
}
