import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';
import PreferencesPageView from 'pages/preferences/PreferencesPageView';

const PreferencesPageWithLoader = WithLoader(PreferencesPageView, true);

const PreferencesPageController: React.FC = () => {
  const vm = usePreferencesPageViewModel();

  useEffect(() => {
    (async () => {
      await vm.getPreferences();
    })();
  }, []);

  return (
    <PreferencesPageWithLoader
      isLoading={vm.pageStatus.isLoading}
      isFailed={vm.pageStatus.isFailed}
    />
  );
};

export default observer(PreferencesPageController);
