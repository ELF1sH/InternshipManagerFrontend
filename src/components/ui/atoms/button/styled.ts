import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { SizeType } from 'antd/es/config-provider/SizeContext';

interface ButtonAntProps {
  size: SizeType
}

export const ButtonAnt = styled(Button)<ButtonAntProps>`
  ${({ size = 'middle' }) => css`
    && {
      height: auto;
      padding: ${size === 'small' ? '6px 12px' : size === 'middle' ? '7px 15px' : '11px'};
      font-size: ${size === 'small' && '14px'};
      font-weight: 700;
      width: fit-content;
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      >svg {
        margin-right: 6px;
      }
    }
  `}
`;
