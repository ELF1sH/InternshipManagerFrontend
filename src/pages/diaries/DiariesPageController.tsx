import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useDiariesPageViewModel } from 'pages/diaries/viewModel/context';
import DiariesPageView from 'pages/diaries/DiariesPageView';

const DiariesPageViewWithLoader = WithLoader(DiariesPageView, true);

const DiariesPageController: React.FC = () => {
  const viewModel = useDiariesPageViewModel();

  useEffect(() => {
    (async () => {
      viewModel.initRequests();
    })();
  }, []);

  return (
    <DiariesPageViewWithLoader
      isLoading={viewModel.pageStatus.isLoading}
      isFailed={viewModel.pageStatus.isFailed}
    />
  );
};

export default observer(DiariesPageController);
