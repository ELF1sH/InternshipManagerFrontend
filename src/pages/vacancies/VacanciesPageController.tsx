import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';
import VacanciesPageView from 'pages/vacancies/VacanciesPageView';

const ClassesGridViewWithLoader = WithLoader(VacanciesPageView, true);

const VacanciesPageController: React.FC = () => {
  const viewModel = useVacanciesPageViewModel();

  useEffect(() => {
    (async () => {
      await viewModel.getVacancies();
    })();
  }, []);

  return (
    <ClassesGridViewWithLoader
      isLoading={viewModel.pageStatus.isLoading}
      isFailed={viewModel.pageStatus.isFailed}
    />
  );
};

export default observer(VacanciesPageController);
