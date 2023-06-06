import React, { useMemo } from 'react';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';
import { VacanciesPageViewModelContext } from 'pages/vacancies/viewModel/context';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';

const VacanciesPageProvider: React.FC = () => {
  const vacanciesPageViewModel = useMemo(() => new VacanciesPageViewModel(), []);

  return (
    <VacanciesPageViewModelContext.Provider value={vacanciesPageViewModel}>
      <ClassesGridController />
    </VacanciesPageViewModelContext.Provider>
  );
};

export default VacanciesPageProvider;
