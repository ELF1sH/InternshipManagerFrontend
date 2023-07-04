import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useTemplatesPageViewModel } from 'pages/templates/viewModel/context';
import TemplatesPageView from 'pages/templates/TemplatesPageView';

const TemplatesPageViewWithLoader = WithLoader(TemplatesPageView, true);

const TemplatesPageController: React.FC = () => {
  const viewModel = useTemplatesPageViewModel();

  useEffect(() => {
    (async () => {
      await viewModel.getTemplates();
    })();
  }, []);

  return (
    <TemplatesPageViewWithLoader
      isLoading={viewModel.pageStatus.isLoading}
      isFailed={viewModel.pageStatus.isFailed}
    />
  );
};

export default observer(TemplatesPageController);
