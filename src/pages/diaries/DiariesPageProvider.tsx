import React, { useMemo } from 'react';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';

import { DiariesPageViewModel } from 'pages/diaries/viewModel';
import { DiariesPageViewModelContext } from 'pages/diaries/viewModel/context';
import DiariesPageController from 'pages/diaries/DiariesPageController';

const DiariesPageProvider: React.FC = () => {
  const getDiariesUseCase = new GetDiariesListUseCase({
    requestCallback: diaryRepository.getDiariesList,
  });

  const viewModel = useMemo(
    () => new DiariesPageViewModel(getDiariesUseCase),
    [],
  );

  return (
    <DiariesPageViewModelContext.Provider value={viewModel}>
      <DiariesPageController />
    </DiariesPageViewModelContext.Provider>
  );
};

export default DiariesPageProvider;
