import {
  action, computed, makeObservable, observable,
} from 'mobx';

import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { AddToSelectionsUseCase } from 'domain/useCases/vacancy/AddToSelectionsUseCase';
import { ISelection, SelectionStatus } from 'domain/entities/selection';
import { GetSelectionsUseCase } from 'domain/useCases/vacancy/GetSelectionsUseCase';

import { IGettingInternshipTableRow } from 'pages/gettingInternship/GettingInternshipPageView';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class GettingInternshipPageViewModel {
  @observable public pageStatus = new LoadStatus(true);

  @observable public selections: ISelection[] = [];

  public constructor(
    private _getSelections: GetSelectionsUseCase,
    private _patchSelection: PatchSelectionUseCase,
    private _addToSelections: AddToSelectionsUseCase,
  ) {
    makeObservable(this);
  }

  @computed public get selectionsRows(): IGettingInternshipTableRow[] {
    return this.selections.map((selection) => ({
      company: selection.vacancy.company.name,
      vacancy: [selection.vacancy.name, selection.vacancy.techStack],
      status: selection,
    }));
  }

  @action public getSelections = () => {
    this._getSelections.fetch({
      payload: undefined,
      onSuccess: (selections) => {
        this.selections = selections;
        this.pageStatus.onEndRequest();
      },
      onError: () => {
        this.pageStatus.onEndRequest(false);
      },
    });
  };

  @action public addToSelections = (payload: number) => this._addToSelections.fetch({
    payload,
    onSuccess: () => { this.getSelections(); },
    onError: () => { throw new Error(); },
  });

  @action public patchSelection = (id: number, status: SelectionStatus) => (
    this._patchSelection.fetch({
      payload: { id, status },
      onSuccess: () => { this.getSelections(); },
      onError: () => { throw new Error(); },
    })
  );
}
