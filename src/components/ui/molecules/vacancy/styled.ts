import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import Space from 'components/ui/atoms/space/Space';

export const VacancyWrapper = styled(Space)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: relative;
    
    &&:before {
      content: '';
      display: block;
      width: 15px;
      height: 15px;
      background-color: ${theme.colorPrimary};
      border-radius: 50%;
      
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;

export const StackWrapper = styled(Space)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: relative;
    
    &&:before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background-color: ${theme.colorPrimary};
      border-radius: 50%;

      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  `}
`;
