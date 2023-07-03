import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';
import CompanyDetailsPageView from 'pages/vacancies/CompanyDetailsPageView';

const ClassesGridViewWithLoader = WithLoader(CompanyDetailsPageView, true);

const CompanyPageController: React.FC = () => {
  const viewModel = useVacanciesPageViewModel();

  useEffect(() => {
    (async () => {
      await viewModel.initRequests();
    })();
  }, []);

  return (
    <ClassesGridViewWithLoader
      isLoading={viewModel.pageStatus.isLoading}
      isFailed={viewModel.pageStatus.isFailed}
    />
  );
};

export default observer(CompanyPageController);
