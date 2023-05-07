import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

export const LinksBlockWrapper = styled.div<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    border-radius: 12px;
    width: 375px;
    padding: 10px;
    
    border: 2px solid ${theme['gray-5']};
  `}
`;
