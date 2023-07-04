import React from 'react';
import { Drawer } from 'antd';
import { observer } from 'mobx-react-lite';

import { type } from 'components/ui/organisms/entityDrawer/entities/student/constants';
import EntityDrawerStudentContent from 'components/ui/organisms/entityDrawer/entities/student/content/EntityDrawerStudentContent';
import WithLoader from 'components/ui/molecules/withLoader/WithLoader';
import { drawerPlacement, drawerWidth } from 'components/ui/organisms/entityDrawer/constants';
import { useEntityDrawerViewModel } from 'components/ui/organisms/entityDrawer/viewModel/context';

import ProfilePageProvider from 'pages/profile/ProfilePageProvider';

const ContentWithLoader = WithLoader(EntityDrawerStudentContent, true);

const EntityDrawerStudent: React.FC = () => {
  const {
    isOpened, close, getDrawerViewModel, id,
  } = useEntityDrawerViewModel();

  const vm = getDrawerViewModel(type);

  return (
    <Drawer
      title={vm.title}
      placement={drawerPlacement}
      width={drawerWidth}
      open={isOpened(type)}
      onClose={() => close(type)}
    >
      <ProfilePageProvider id={id} />
    </Drawer>
  );
};

export default observer(EntityDrawerStudent);
