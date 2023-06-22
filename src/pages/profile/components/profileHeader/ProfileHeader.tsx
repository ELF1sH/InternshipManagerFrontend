import React from 'react';

import {
  ProfileHeaderBg,
  ProfilePicture,
  StudentName,
  UniversityGroup,
} from 'pages/profile/components/profileHeader/styled';

import { userStore } from 'storesMobx/stores/UserStore';

const ProfileHeader: React.FC = () => {
  const { profile } = userStore;
  return (
    <ProfileHeaderBg>
      <ProfilePicture />
      <StudentName level={2}>{profile.username}</StudentName>
      <UniversityGroup>9720Р, 972002</UniversityGroup>
    </ProfileHeaderBg>
  );
};

export default ProfileHeader;
