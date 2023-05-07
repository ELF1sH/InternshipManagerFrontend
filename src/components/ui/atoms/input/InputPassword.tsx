import React from 'react';
import { InputProps } from 'antd';

import { InputPasswordAnt } from 'components/ui/atoms/input/styled';

const InputPasswordStyled: React.FC<InputProps> = (props) => (
  <InputPasswordAnt {...props} size={props.size} />
);

export default InputPasswordStyled;
