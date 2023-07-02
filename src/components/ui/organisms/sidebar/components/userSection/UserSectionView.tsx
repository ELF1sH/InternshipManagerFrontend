import React from 'react';

import avatar from 'assets/avatar.png';

import {
  UserAvatar, UserLink, UserLinksWrapper, UsernameLink, UserSection, UserSectionTextWrapper,
} from 'components/ui/organisms/sidebar/components/userSection/styled';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { route } from 'utils/constants/route';

interface UserSectionViewProps {
  isSidebarCollapsed: boolean
}

const UserSectionView: React.FC<UserSectionViewProps> = ({ isSidebarCollapsed }) => (
  <UserSection isSidebarCollapsed={isSidebarCollapsed}>
    <UserAvatar alt="User avatar" src={avatar} />

    {!isSidebarCollapsed && (
      <UserSectionTextWrapper>
        <UsernameLink>Иванов Иван Иванович</UsernameLink>
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

export default UserSectionView;
