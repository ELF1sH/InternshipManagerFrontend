import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Typography } from 'antd';

import ChevronUpIcon from 'components/ui/atoms/icons/ChevronUpIcon';

export const SidebarLinkWrapper = styled.div`
  padding: 2px 0;
`;

interface ChevronUpIconStyledProps {
  $isVisible: boolean;
}

export const ChevronUpIconStyled = styled(ChevronUpIcon)<ChevronUpIconStyledProps>`
  ${({ $isVisible }) => css`
    transform: rotate(${+!$isVisible * 180}deg);
    transition: .2s transform;
    z-index: 100;
  `}
`;

export const TreeWrapper = styled.div`
  padding-top: 10px;
`;

export const TreeHeaderWrapper = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  
  display:flex;
  align-items:center;
  gap: 10px;
`;

export const TreeHeader = styled(Typography)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    font-size: ${theme.fontSizeSm};
    font-weight: bold;
    line-height: 1.2;
  `}
`;
