import React from 'react';
import { observer } from 'mobx-react-lite';

import avatar from 'assets/avatar.png';

import {
  UserAvatar, UserLink, UserLinksWrapper, UsernameLink, UserSection, UserSectionTextWrapper,
} from 'components/ui/organisms/sidebar/components/userSection/styled';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { useStore } from 'storesMobx/MobxStoreProvider';

import { route } from 'utils/constants/route';

interface UserSectionViewProps {
  isSidebarCollapsed: boolean
}

const UserSectionView: React.FC<UserSectionViewProps> = ({ isSidebarCollapsed }) => {
  const { user } = useStore().userStore;

  return (
    <UserSection isSidebarCollapsed={isSidebarCollapsed}>
      <UserAvatar alt="User avatar" src={avatar} />

      {!isSidebarCollapsed && (
        <UserSectionTextWrapper>
          <UsernameLink>{`${user?.lastname} ${user?.firstname} ${user?.patronymic}`}</UsernameLink>
          <UserLinksWrapper>
            <UserLink to={route.settings}>Настройки</UserLink>

            <UserLink
              href={route.base}
              onClick={() => {
                tokenRepository.removeAccessToken();
              }}
            >
              Выйти
            </UserLink>
          </UserLinksWrapper>
        </UserSectionTextWrapper>
      )}
    </UserSection>
  );
};

export default observer(UserSectionView);
