import {
  action, makeObservable, observable,
} from 'mobx';

import { GetStudentsListUseCase } from 'domain/useCases/students/GetStudentsListUseCase';
import { IStudent } from 'domain/entities/student';
import { AddStudentsListUseCase } from 'domain/useCases/students/AddStudentsListUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class StudentsPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  public studentsList: IStudent[] = [];

  public constructor(
    private _getStudents: GetStudentsListUseCase,
    private _addStudentsList: AddStudentsListUseCase,
  ) {
    makeObservable(this);
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

  @action public addStudentsList = (payload: any[]) => this._addStudentsList.fetch({
    payload,
    onSuccess: (students) => {
      this.studentsList = [...this.studentsList, ...students];
    },
    onError: () => { throw new Error(); },
  });
}