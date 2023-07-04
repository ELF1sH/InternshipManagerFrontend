import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useGettingInternshipPageViewModel } from 'pages/gettingInternship/viewModel/context';
import GettingInternshipPageView from 'pages/gettingInternship/GettingInternshipPageView';

const ViewWithLoader = WithLoader(GettingInternshipPageView, true);

const GettingInternshipPageController: React.FC = () => {
  const { pageStatus, getSelections } = useGettingInternshipPageViewModel();

  useEffect(() => {
    getSelections();
  }, []);

  return (
    <ViewWithLoader
      isLoading={pageStatus.isLoading}
      isFailed={pageStatus.isFailed}
    />
  );
};

export default observer(GettingInternshipPageController);
