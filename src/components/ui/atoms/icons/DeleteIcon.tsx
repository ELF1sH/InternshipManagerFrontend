import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const DeleteIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z"
      fill={color}
    />
  </svg>
);

export default DeleteIcon;
