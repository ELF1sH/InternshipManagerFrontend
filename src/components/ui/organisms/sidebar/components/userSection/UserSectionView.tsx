import React from 'react';
import { observer } from 'mobx-react-lite';
import { Typography } from 'antd';

import avatar from 'assets/avatar.png';

import Space from 'components/ui/atoms/space/Space';
import {
  UserAvatar, UserLink, UserLinksWrapper, UsernameLink, UserSection, UserSectionTextWrapper,
} from 'components/ui/organisms/sidebar/components/userSection/styled';

import { IUser } from 'domain/entities/user';
import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

import { route } from 'utils/constants/route';

interface UserSectionViewProps {
  isSidebarCollapsed: boolean
}

const getAdditionalData = (user?: IUser) => {
  if (user?.role === UserRole.STUDENT) {
    return [user?.groupNumber ?? null, user?.studyYear ?? null].join(' ');
  }

  if (user?.role === UserRole.COMPANY) {
    return 'Представитель компании';
  }

  return 'Сотрудник деканата';
};

const UserSectionView: React.FC<UserSectionViewProps> = ({ isSidebarCollapsed }) => {
  const { user } = useStore().userStore;

  return (
    <UserSection isSidebarCollapsed={isSidebarCollapsed}>
      <UserAvatar alt="User avatar" src={avatar} />

      {!isSidebarCollapsed && (
        <UserSectionTextWrapper>
          <Space direction="vertical" gap={2}>
            <UsernameLink>{`${user?.lastname} ${user?.firstname} ${user?.patronymic}`}</UsernameLink>

            <Typography.Text style={{ fontSize: '14px', lineHeight: '14px' }}>{getAdditionalData(user)}</Typography.Text>
          </Space>

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
