import React, { useMemo } from 'react';

import { PostDiaryTemplateUseCase } from 'domain/useCases/diaryTemplate/PostDiaryTemplateUseCase';
import { GetDiaryTemplateUseCase } from 'domain/useCases/diaryTemplate/GetDiaryTemplateUseCase';
import { GetDiaryTemplatesListUseCase } from 'domain/useCases/diaryTemplate/GetDiaryTemplatesListUseCase';
import { diaryTemplateRepository } from 'domain/repositories/api/DiaryTemplateRepository';

import { TemplatesPageViewModel } from 'pages/templates/viewModel';
import { TemplatesPageViewModelContext } from 'pages/templates/viewModel/context';
import TemplatesPageController from 'pages/templates/TemplatesPageController';

const TemplatesPageProvider: React.FC = () => {
  const getDiaryTemplatesUseCase = new GetDiaryTemplatesListUseCase({
    requestCallback: diaryTemplateRepository.getList,
  });

  const getDiaryTemplateUseCase = new GetDiaryTemplateUseCase({
    requestCallback: diaryTemplateRepository.getDiaryTemplate,
  });

  const postTemplateUseCase = new PostDiaryTemplateUseCase({
    requestCallback: diaryTemplateRepository.postDiaryTemplate,
  });

  const viewModel = useMemo(
    () => new TemplatesPageViewModel(
      getDiaryTemplateUseCase,
      getDiaryTemplatesUseCase,
      postTemplateUseCase,
    ),
    [],
  );

  return (
    <TemplatesPageViewModelContext.Provider value={viewModel}>
      <TemplatesPageController />
    </TemplatesPageViewModelContext.Provider>
  );
};

export default TemplatesPageProvider;
