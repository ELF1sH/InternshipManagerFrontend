import React, { useMemo } from 'react';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { PatchDiaryUseCase } from 'domain/useCases/diary/PatchDiarytUseCase';

import { DiariesPageViewModel } from 'pages/diaries/viewModel';
import { DiariesPageViewModelContext } from 'pages/diaries/viewModel/context';
import DiariesPageController from 'pages/diaries/DiariesPageController';

const DiariesPageProvider: React.FC = () => {
  const getDiariesUseCase = new GetDiariesListUseCase({
    requestCallback: diaryRepository.getDiariesList,
  });

  const patchDiaryUseCase = new PatchDiaryUseCase({
    requestCallback: diaryRepository.patchDiary,
  });

  const viewModel = useMemo(
    () => new DiariesPageViewModel(getDiariesUseCase, patchDiaryUseCase),
    [],
  );

  return (
    <DiariesPageViewModelContext.Provider value={viewModel}>
      <DiariesPageController />
    </DiariesPageViewModelContext.Provider>
  );
};

export default DiariesPageProvider;
