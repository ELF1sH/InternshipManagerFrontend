import React from 'react';

import avatar from 'assets/avatar.png';

import {
  UserAvatar, UserLink, UserLinksWrapper, UsernameLink, UserSection, UserSectionTextWrapper,
} from 'components/ui/organisms/sidebar/components/userSection/styled';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { userStore } from 'storesMobx/stores/UserStore';

interface UserSectionViewProps {
  isSidebarCollapsed: boolean
}

const UserSectionView: React.FC<UserSectionViewProps> = ({ isSidebarCollapsed }) => {
  const { profile } = userStore;

  return (
    <UserSection isSidebarCollapsed={isSidebarCollapsed}>
      <UserAvatar alt="User avatar" src={avatar} />

      {!isSidebarCollapsed && (
      <UserSectionTextWrapper>
        <UsernameLink>
          {profile.username}
        </UsernameLink>
        <UserLinksWrapper>
          <UserLink>Settings</UserLink>
          <UserLink
            href="/"
            onClick={() => {
              tokenRepository.removeAccessToken();
            }}
          >
            Log out
          </UserLink>
        </UserLinksWrapper>
      </UserSectionTextWrapper>
      )}
    </UserSection>
  );
};

export default UserSectionView;
