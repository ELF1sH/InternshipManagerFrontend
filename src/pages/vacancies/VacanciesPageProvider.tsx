import React from 'react';

import { VacanciesPageViewModel } from 'pages/vacancies/VacanciesPageViewModel';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';

const VacanciesPageProvider: React.FC = () => {
  const classesGridViewModel = new VacanciesPageViewModel();

  return (
    <ClassesGridController viewModel={classesGridViewModel} />
  );
};

export default VacanciesPageProvider;
