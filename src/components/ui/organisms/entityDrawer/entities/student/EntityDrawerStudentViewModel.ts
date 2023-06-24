import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { GetStudentUseCase } from 'domain/useCases/students/GetStudentUseCase';
import { IStudent } from 'domain/entities/student';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class EntityDrawerStudentViewModel {
  @observable public pageStatus: LoadStatus = new LoadStatus();

  @observable public student: IStudent | undefined;

  public constructor(
    private _getStudent: GetStudentUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get title() {
    return `${this.student?.lastname} ${this.student?.firstname} ${this.student?.patronymic}`;
  }

  @action public async fetch(id: number): Promise<void> {
    this.pageStatus.onStartRequest();

    await this._getStudent.fetch({
      payload: { id },
      onSuccess: (student) => {
        runInAction(() => {
          this.student = student;
        });

        this.pageStatus.onEndRequest();
      },
      onError: () => {
        this.pageStatus.onEndRequest(false);
      },
    });
  }
}
