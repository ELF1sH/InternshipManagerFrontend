import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import LogoBank from 'components/ui/atoms/icons/logo/LogoBank';
import LogoText from 'components/ui/atoms/icons/logo/LogoText';

export const LogoWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: relative;
    min-height: 130px;
    color: ${theme.colorText};
  `}
`;

interface LogoHedgehogStyledProps {
  $isSidebarCollapsed: boolean;
}

export const LogoBankStyled = styled(LogoBank)<LogoHedgehogStyledProps>`
  ${({ $isSidebarCollapsed }) => css`
    position: absolute;
    transition: .2s top, .2s left, .2s transform;
    transition-delay: .15s;
    top: ${!$isSidebarCollapsed ? '80px' : '60px'};
    left: ${!$isSidebarCollapsed ? '150px' : '2px'};
  `}
`;

export const LogoTextStyled = styled(LogoText)`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
`;
