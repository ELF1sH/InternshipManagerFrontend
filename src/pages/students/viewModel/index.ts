import {
  action, computed, makeObservable, observable, runInAction,
} from 'mobx';

import { GetSelectionsUseCase } from 'domain/useCases/vacancy/GetSelectionsUseCase';
import { GetSelectionsByStudentUseCase } from 'domain/useCases/vacancy/GetSelectionsByStudentUseCase';
import { IAddStudentResponse, IAddStudentsListPayload } from 'domain/repositories/api/interfaces/IStudentsRepository';
import { GetStudentsListUseCase } from 'domain/useCases/students/GetStudentsListUseCase';
import { IStudent } from 'domain/entities/student';
import { AddStudentsListUseCase } from 'domain/useCases/students/AddStudentsListUseCase';
import { ICandidate } from 'domain/entities/condidate';
import { GetCandidateListUseCase } from 'domain/useCases/company/GetCandidateListUseCase';
import { ISelection, SelectionStatus } from 'domain/entities/selection';
import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';

import { UserRole } from 'modules/authority/enums/UserRole';

import { getMaxStatus, StatusLevel } from 'pages/students/helpers/getMaxStatus';
import { SortedCandidatesByGroup } from 'pages/students/components/tableCompany/TableCompany';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';
import { userStore } from 'storesMobx/stores/UserStore';

export class StudentsPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public _studentsList: IStudent[] = [];

  @observable public candidatesList: ICandidate[] = [];

  @observable public selections: ISelection[] = [];

  @observable public selectionStatuses: Record<number, StatusLevel> = {};

  @observable public statusFilters: StatusLevel[] = [];

  public constructor(
    private _getStudents: GetStudentsListUseCase,
    private _addStudentsList: AddStudentsListUseCase,
    private _getCandidatesList: GetCandidateListUseCase,
    private _patchSelection: PatchSelectionUseCase,
    public getSelectionsByStudent: GetSelectionsByStudentUseCase,
    private _getSelections: GetSelectionsUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get studentsList() {
    if (!this.statusFilters.length) {
      return this._studentsList;
    }

    const idsStatuses = Object.entries(this.selectionStatuses)
      .filter((pair) => this.statusFilters.includes(pair[1]));

    const ids = idsStatuses.map((a) => a[0]);

    return this._studentsList.filter((s) => ids.includes(s.id.toString()));
  }

  @action public updateStatusFilters = (level: StatusLevel) => {
    const index = this.statusFilters.indexOf(level);

    if (index !== -1) {
      this.statusFilters = this.statusFilters.filter((s) => s !== level);
    } else {
      this.statusFilters = [...this.statusFilters, level];
    }
  };

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
      .filter(({ company }) => `${company?.name}`.toLowerCase().trim()
        .includes(this.intershipSearchString));

    return new Promise((resolve) => {
      setTimeout(() => resolve(filtredStudents), 400);
    });
  }

  @computed public get sortedCandidates(): SortedCandidatesByGroup {
    const groups = new Map<string, SortedCandidatesByGroup['sortedCandidatesByGroup'][0]>();

    this.candidatesList.forEach((val) => {
      const { groupNumber } = val.student;
      const currentVal = groups.get(groupNumber);

      const vl: SortedCandidatesByGroup['sortedCandidatesByGroup'][0] = {
        groupNumber: val.student.groupNumber,
        candidates: currentVal?.candidates ? [...currentVal.candidates, val] : [val],
      };

      groups.set(
        groupNumber,
        vl,
      );
    });

    return {
      sortedCandidatesByGroup: Array.from(groups).map(([_name, value]) => (value)),
    };
  }

  @action public initRequests = () => {
    const { role } = userStore;
    const promises = [this.getStudents()];

    if (role === UserRole.COMPANY) {
      promises.push(this.getCandidates());
    }

    Promise.all(promises)
      .then(() => this.pageStatus.onEndRequest())
      .catch(() => this.pageStatus.onEndRequest(false));
  };

  @action private getStudents = () => this._getStudents.fetch({
    payload: undefined,
    onSuccess: (students) => {
      runInAction(() => {
        this._studentsList = students;
      });

      const promises = students.map((student) => this.getSelectionsByStudentAction(student.id));

      Promise.all(promises);
    },
    onError: () => { throw new Error(); },
  });

  @action public setStudents = (students: IStudent[]) => {
    this._studentsList = students;
  };

  @action private getSelectionsByStudentAction = (id: number) => this.getSelectionsByStudent.fetch({
    payload: { studentId: id },
    onSuccess: (selections) => {
      runInAction(() => {
        this.selectionStatuses = {
          ...this.selectionStatuses,
          [id]: getMaxStatus(selections),
        };
      });
      console.log(selections);
    },
  });

  @action public addStudentsList = (
    payload: IAddStudentsListPayload,
    onSuccess?: (res: IAddStudentResponse[]) => void,
  ) => this._addStudentsList.fetch({
    payload,
    onSuccess: (students) => {
      this.initRequests();

      onSuccess?.(students);
    },
    onError: () => { throw new Error(); },
  });

  @action private getCandidates = () => this._getCandidatesList.fetch({
    payload: undefined,
    onSuccess: (candidates) => {
      this.candidatesList = candidates;
    },
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
