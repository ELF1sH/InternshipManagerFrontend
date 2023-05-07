import React from 'react';
import { ButtonProps } from 'antd';

import { ButtonAnt } from 'components/ui/atoms/button/styled';

const ButtonStyled: React.FC<ButtonProps> = (props) => (
  <ButtonAnt {...props} size={props.size} />
);

export default ButtonStyled;
