import { Typography } from 'antd';
import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';

const { Text: TextAntd } = Typography;

interface TextProps {
  $size?: 'small' | 'middle' | 'large';
  $primary?: boolean;
}

const getFontSize = (size: TextProps['$size']) => {
  switch (size) {
    case 'small':
      return '12px';
    case 'middle':
      return '16px';
    case 'large':
      return '22px';
    default:
      return '16px';
  }
};

const Text = styled(TextAntd)<TextProps & ThemeProps<DefaultTheme>>`
  ${({ theme, $size, $primary = false }) => css`
    font-size: ${getFontSize($size)};
    
    ${$primary && css`
      && {
        color: ${theme.colorPrimary}
      }
    `}
  `}
`;

export default Text;
