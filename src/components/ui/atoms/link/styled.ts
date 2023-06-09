import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { Link } from 'react-router-dom';

const linkStyles = ({ theme }: ThemeProps<DefaultTheme>) => css`
  cursor: pointer;
  text-decoration: none;
  color: ${theme.colorText};
  transition: color .2s;
  position: relative;

  &:hover {
    color: ${theme.colorLinkHover};
  }
  &:active {
    color: ${theme.colorPrimary};
  }

  >* {
    transition: color .2s, background-color .2s;
    &:hover {
      color: ${theme.colorLinkHover};
    }
    &:active {
      color: ${theme.colorPrimary};
    }
  }
`;

export const StyledLink = styled.a<ThemeProps<DefaultTheme>>`
  ${({ theme }) => linkStyles({ theme })}
`;

export const StyledRouterLink = styled(Link)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => linkStyles({ theme })}
`;
