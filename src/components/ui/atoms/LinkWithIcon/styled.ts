import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

interface RouterLinkStyledProps {
  $active?: boolean;
  $primary?: boolean;
  $bold?: boolean;
}

export const RouterLinkStyled = styled(Link)<ThemeProps<DefaultTheme> & RouterLinkStyledProps>`
  ${({
    theme,
    $active = false,
    $primary = false,
    $bold = false,
  }) => css`
    text-decoration: none;
    color: ${$primary ? theme.colorPrimary : theme.colorText};
    
    ${($primary || $bold) && css`
      font-weight: bold;
    `}
    
    ${$active && css`
      background-color: ${theme.colorPrimary};
    `}
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 8px 10px;
    border-radius: 8px;
    transition: .2s background-color, .2s color;
    &:hover {
      ${!$active && css`
        background-color: ${theme.colorPrimaryBgHover};
      `}
      color: ${theme.colorText};
    }
    &:active {
      ${!$active && css`
        background-color ${theme.colorPrimarySoft};
      `}
      color: ${theme.colorText};
    }
  `}
  
  svg {
    flex-shrink: 0;
  }
`;

export const RouterLinkLeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
