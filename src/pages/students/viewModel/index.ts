import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { GetStudentsListUseCase } from 'domain/useCases/students/GetStudentsListUseCase';
import { AddStudentRequest, IStudent } from 'domain/entities/student';
import { AddStudentsListUseCase } from 'domain/useCases/students/AddStudentsListUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class StudentsPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public studentsList: IStudent[] = [];

  public constructor(
    private _getStudents: GetStudentsListUseCase,
    private _addStudentsList: AddStudentsListUseCase,
  ) {
    makeObservable(this);
  }

  @observable public fullnameSearchString: string = '';

  @action public setFullnameSearchString = (val: string) => {
    this.fullnameSearchString = val.toLowerCase().trim();
  };

  @observable public groupSearchString: string = '';

  @action public setGroupSearchString = (val: string) => {
    this.groupSearchString = val.toLowerCase().trim();
  };

  @observable public intershipSearchString: string = '';

  @action public setIntershipSearchString = (val: string) => {
    this.intershipSearchString = val.toLowerCase().trim();
  };

  @computed public get filtredStudents(): Promise<IStudent[]> {
    let filtredStudents = this.studentsList
      .filter(({ firstname, lastname, patronymic }) => `${firstname} ${lastname} ${patronymic}`.toLowerCase().trim()
        .includes(this.fullnameSearchString));

    filtredStudents = filtredStudents
      .filter(({ groupNumber }) => `${groupNumber}`.toLowerCase().trim()
        .includes(this.groupSearchString));

    filtredStudents = filtredStudents
      .filter(({ internshipPlace }) => `${internshipPlace?.name}`.toLowerCase().trim()
        .includes(this.intershipSearchString));

    return new Promise((resolve) => {
      setTimeout(() => resolve(filtredStudents), 400);
    });
  }

  @action public initRequests = () => {
    Promise.all([this.getStudents()])
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

  @action private getStudents = () => this._getStudents.fetch({
    payload: undefined,
    onSuccess: (students) => {
      this.studentsList = students;
    },
    onError: () => { throw new Error(); },
  });

  @action public setStudents = (students: IStudent[]) => {
    this.studentsList = students;
  };

  @action public addStudentsList = (payload: AddStudentRequest[]) => this._addStudentsList.fetch({
    payload,
    onSuccess: (students) => {
      runInAction(() => {
        this.studentsList = [...this.studentsList, ...students];
      });
    },
    onError: () => { throw new Error(); },
  });
}
