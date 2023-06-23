import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import StudentsPageView from 'pages/students/StudentsPageView';

const StudentsViewWithLoader = WithLoader(StudentsPageView, true);

const StudentsPageController: React.FC = () => {
  const viewModel = useStudentsPageViewModel();

  useEffect(() => {
    viewModel.initRequests();
  }, []);

  return (
    <StudentsViewWithLoader
      isLoading={viewModel.pageStatus.isLoading}
      isFailed={viewModel.pageStatus.isFailed}
    />
  );
};

export default observer(StudentsPageController);
