import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { IDiary } from 'domain/entities/diary';
import { IUser } from 'domain/entities/user';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';
import { IInternshipHistory } from 'domain/entities/intershipHistory';
import { GetIntershipHistoryUseCase } from 'domain/useCases/profiles/GetIntershipHistoryUseCase';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { IVacancy } from 'domain/entities/vacancy';
import { PatchIntershipHistoryByVacancyUseCase } from 'domain/useCases/profiles/PatchIntershipHistoryByVacancyUseCase copy';
import { PostIntershipUseCase } from 'domain/useCases/profiles/PostIntershipUseCase';
import { GetFeedbackListUseCase } from 'domain/useCases/feedback/GetFeedbackListUseCase';
import { IFeedback } from 'domain/entities/feedback';
import { GetStudentUseCase } from 'domain/useCases/students/GetStudentUseCase';
import { GetIntershipHistoryByIdUseCase } from 'domain/useCases/profiles/GetIntershipHistoryByIdUseCase';

import { UserRole } from 'modules/authority/enums/UserRole';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class ProfilePageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public profile: IUser | undefined;

  @observable public diaries: IDiary[] = [];

  @observable public internshipHistory: IInternshipHistory[] = [];

  @observable private vacanciesList: IVacancy[] = [];

  @observable public feedbackList: IFeedback[] = [];

  public constructor(
    private _getProfile: GetProfileUseCase,
    private _getDiaries: GetDiariesListUseCase,
    private _getInternshipHistory: GetIntershipHistoryUseCase,
    private _getVacancies: GetVacancyListUseCase,
    private _patchinternshipByVacancy: PatchIntershipHistoryByVacancyUseCase,
    private _createInternshipByVacancy: PostIntershipUseCase,
    private _getFeedbackList: GetFeedbackListUseCase,
    private _getStudentById: GetStudentUseCase,
    private _getInternshipHistoryById: GetIntershipHistoryByIdUseCase,
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

  @observable public companySearchString: string = '';

  @action public setCompanySearchString = (val: string) => {
    this.companySearchString = val.toLowerCase().trim();
  };

  @observable public vacancySearchString: string = '';

  @action public setVacancySearchString = (val: string) => {
    this.vacancySearchString = val.toLowerCase().trim();
  };

  @computed public get filtredCompanies(): Promise<CompanyWithVacancies[]> {
    let filtredCompanies = this.companiesWithVacancies
      .filter((val) => val.name.toLowerCase().trim()
        .includes(this.companySearchString));

    filtredCompanies = filtredCompanies.map((val) => ({
      ...val,
      vacancies: val.vacancies
        .filter((vac) => vac.name.toLowerCase().trim()
          .includes(this.vacancySearchString)),
    }));
    return new Promise((resolve) => {
      setTimeout(() => resolve(filtredCompanies), 400);
    });
  }

  @action public initRequests = (profileId?: number) => {
    const promises = [this.getProfile()];

    console.log(profileId);
    if (userStore.role === UserRole.UNIVERSITY_DEPARTMENT && profileId) {
      promises.push(
        this.getStudentById(profileId),
        this.getInternshipHistoryById(profileId),
      );
    } else if (userStore.role === UserRole.STUDENT) {
      promises.push(
        this.getDiaries(),
        this.getInternshipHistory(),
        this.getVacancies(),
      );
    }

    Promise.all(promises)
      .then(() => {
        this.pageStatus.onEndRequest();
      })
      .catch(() => {
        this.pageStatus.onEndRequest(false);
      });
  };

  @action private getProfile = () => this._getProfile.fetch({
    payload: undefined,
    onSuccess: (profile) => {
      console.log(profile);
      this.profile = profile;
      this.pageStatus.onEndRequest();
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action private getDiaries = () => this._getDiaries.fetch({
    payload: undefined,
    onSuccess: (diaries) => {
      this.diaries = diaries;
      this.pageStatus.onEndRequest();
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action private getInternshipHistory = () => this._getInternshipHistory.fetch({
    payload: undefined,
    onSuccess: (internshipHistory) => {
      runInAction(() => {
        this.internshipHistory = internshipHistory.sort((a, b) => a.orderNumber - b.orderNumber);
        this.pageStatus.onEndRequest();
      });
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action private getVacancies = () => this._getVacancies.fetch({
    payload: undefined,
    onSuccess: (vacancies) => {
      runInAction(() => {
        this.vacanciesList = vacancies;
      });
    },
    onError: () => { throw new Error(); },
  });

  @action public patchinternshipByVacancy = ({ vacancyId, semester }:{vacancyId: number,
     semester: number}) => this._patchinternshipByVacancy.fetch({
    payload: { vacancyId, semester },
    onSuccess: () => {
      this.initRequests();
      this.pageStatus.onEndRequest();
    },
    onError: () => { throw new Error(); },
  });

  @action public createInternship = ({ companyName, semester }:{companyName: string,
    semester: number}) => this._createInternshipByVacancy.fetch({
    payload: { companyName, semester },
    onSuccess: () => {
      this.initRequests();
      this.pageStatus.onEndRequest();
    },
    onError: () => { throw new Error(); },
  });

  @action public getFeedback = (payload: number) => this._getFeedbackList.fetch({
    payload: { studentId: payload },
    onSuccess: (feedback) => {
      this.feedbackList = feedback;
      this.initRequests();
      this.pageStatus.onEndRequest();
    },
    onError: () => { throw new Error(); },
  });

  @action public getStudentById = (payload: number) => this._getStudentById.fetch({
    payload: { id: payload },
    onSuccess: (student) => {
      this.profile = {
        ...student,
        role: 'DEAN',
      };

      this.pageStatus.onEndRequest();
    },
    onError: () => { throw new Error(); },
  });

  @action public getInternshipHistoryById = (payload: number) => this
    ._getInternshipHistoryById.fetch({
      payload,
      onSuccess: (history) => {
        this.internshipHistory = history;

        this.pageStatus.onEndRequest();
      },
      onError: () => { throw new Error(); },
    });
}
