import React from 'react';

import UserSectionView from 'components/ui/organisms/sidebar/components/userSection/UserSectionView';

interface UserSectionControllerProps {
  isSidebarCollapsed: boolean,
}

const UserSectionController: React.FC<UserSectionControllerProps> = ({ isSidebarCollapsed }) => (
  <UserSectionView
    isSidebarCollapsed={isSidebarCollapsed}
  />
);

export default UserSectionController;
