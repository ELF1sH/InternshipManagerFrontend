import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useSearchParams } from 'react-router-dom';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';
import ProfilePageView from 'pages/profile/ProfilePageView';

const ProfilePageViewWithLoader = WithLoader(ProfilePageView, true);

const ProfilePageController: React.FC = () => {
  const { pageStatus, initRequests } = useProfilePageViewModel();

  const [searchParams] = useSearchParams();

  useEffect(() => {
    (async () => {
      await initRequests(Number(searchParams.get('id')));
    })();
  }, []);

  return (
    <ProfilePageViewWithLoader
      isLoading={pageStatus.isLoading}
      isFailed={pageStatus.isFailed}
    />
  );
};

export default observer(ProfilePageController);
