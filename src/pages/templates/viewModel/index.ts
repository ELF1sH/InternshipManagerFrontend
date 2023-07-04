import {
  action, makeObservable, observable, runInAction,
} from 'mobx';

import { IPostDiaryTemplatePayload } from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';
import { PostDiaryTemplateUseCase } from 'domain/useCases/diaryTemplate/PostDiaryTemplateUseCase';
import { IDiaryTemplate } from 'domain/entities/diaryTemplate';
import { GetDiaryTemplatesListUseCase } from 'domain/useCases/diaryTemplate/GetDiaryTemplatesListUseCase';
import { GetDiaryTemplateUseCase } from 'domain/useCases/diaryTemplate/GetDiaryTemplateUseCase';

import { LoadStatus } from 'storesMobx/helpers/LoadStatus';

export class TemplatesPageViewModel {
  @observable public templates: IDiaryTemplate[] = [];

  @observable public pageStatus = new LoadStatus();

  public constructor(
    private _getTemplateUseCase: GetDiaryTemplateUseCase,
    private _getTemplatesListUseCase: GetDiaryTemplatesListUseCase,
    private _postTemplateUseCase: PostDiaryTemplateUseCase,
  ) {
    makeObservable(this);
  }

  @action public getTemplates = () => this._getTemplatesListUseCase.fetch({
    payload: undefined,
    onSuccess: (templates) => {
      runInAction(() => {
        this.templates = templates;

        console.log(templates);

        this.pageStatus.onEndRequest();
      });
    },
    onError: () => {
      this.pageStatus.onEndRequest(false);
    },
  });

  @action public postTemplate = (payload: IPostDiaryTemplatePayload) => (
    this._postTemplateUseCase.fetch({
      payload,
      onSuccess: () => {
        this.getTemplates();
      },
    })
  );
}
