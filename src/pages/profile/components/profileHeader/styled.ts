import styled from 'styled-components';
import { Typography } from 'antd';

import profileBg from 'assets/profileBg.jpg';
import profilePicture from 'assets/profilePicture.jpg';

import Text from 'components/ui/atoms/text/Text';

import { IChildren } from 'utils/interfaces/IChildren';

const { Title } = Typography;

export const ProfileHeaderBg = styled.div<IChildren>`
  height: 200px;
  background-image: url(${profileBg});
  background-position: center;
  background-size: cover;
  margin: -20px -30px;
  
  position: relative;
  margin-bottom: 120px;
`;

export const ProfilePicture = styled.div`
  width: 202px;
  height: 202px;
  background-image: url(${profilePicture});
  background-size: cover;
  border-radius: 20%;
  
  position: absolute;
  top: 45%;
  left: 80px;
`;

export const StudentName = styled(Title)`
  position: absolute;
  top: 105%;
  left: 300px;
`;

export const UniversityGroup = styled(Text)`
  position: absolute;
  top: 125%;
  left: 300px;
`;
