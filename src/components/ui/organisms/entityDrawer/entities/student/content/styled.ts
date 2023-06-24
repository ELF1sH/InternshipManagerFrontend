import styled from 'styled-components';

import profilePicture from 'assets/profilePicture.jpg';

export const ProfilePicture = styled.div`
  width: 202px;
  height: 202px;
  background-image: url(${profilePicture});
  background-size: cover;
  border-radius: 20%;
`;
