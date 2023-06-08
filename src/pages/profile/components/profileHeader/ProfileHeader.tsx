import React from 'react';

import {
  ProfileHeaderBg,
  ProfilePicture,
  StudentName,
  UniversityGroup,
} from 'pages/profile/components/profileHeader/styled';

const ProfileHeader: React.FC = () => (
  <ProfileHeaderBg>
    <ProfilePicture />
    <StudentName level={2}>Иванов Иван Иванович</StudentName>
    <UniversityGroup>9720Р, 972002</UniversityGroup>
  </ProfileHeaderBg>
);

export default ProfileHeader;
