import React from 'react';
import { Link } from 'react-router-dom';

import Fade from 'components/animations/fade/Fade';
import {
  LogoBankStyled, LogoTextStyled, LogoWrapper,
} from 'components/ui/organisms/sidebar/components/logo/styled';

import { route } from 'utils/constants/route';

interface LogoViewProps {
  isSidebarCollapsed: boolean;
}

const LogoView: React.FC<LogoViewProps> = ({
  isSidebarCollapsed,
}) => (
  <Link to={route.vacancies}>
    <LogoWrapper>
      <LogoBankStyled $isSidebarCollapsed={isSidebarCollapsed} />

      <Fade isVisible={!isSidebarCollapsed}>
        <LogoTextStyled />
      </Fade>
    </LogoWrapper>
  </Link>
);

export default LogoView;
