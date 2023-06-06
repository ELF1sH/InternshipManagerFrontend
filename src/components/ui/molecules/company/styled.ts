import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

import Space from 'components/ui/atoms/space/Space';

export const CompanyWrapper = styled(Space)<ThemeProps<DefaultTheme>>`
  ${({ theme }) => css`
    position: relative;
    padding-left: 40px;
    &::before {
      content: '';
      display: block;
      width: 25px;
      height: 25px;
      background-color: ${theme.colorPrimary};
      border-radius: 50%;
      
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
    }
  `}
`;
