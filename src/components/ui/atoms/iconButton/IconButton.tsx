import React from 'react';
import { ButtonProps } from 'antd/lib/button';

import { IconButtonStyled } from 'components/ui/atoms/iconButton/styled';

export const IconButton: React.FC<ButtonProps> = (props) => (
  <IconButtonStyled
    type="text"
    {...props}
  />
);
