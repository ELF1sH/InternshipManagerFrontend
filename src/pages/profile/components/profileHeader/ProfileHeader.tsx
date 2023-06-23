import React from 'react';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';
import {
  ProfileHeaderBg,
  ProfilePicture,
  StudentName,
  UniversityGroup,
} from 'pages/profile/components/profileHeader/styled';

const ProfileHeader: React.FC = () => {
  const { profile } = useProfilePageViewModel();

  return (
    <ProfileHeaderBg>
      <ProfilePicture />
      <StudentName level={2}>{`${profile?.lastname} ${profile?.firstname} ${profile?.patronymic}`}</StudentName>
      <UniversityGroup>{profile?.groupNumber}</UniversityGroup>
    </ProfileHeaderBg>
  );
};

export default ProfileHeader;
