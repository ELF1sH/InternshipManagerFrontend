import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const ArrowUpIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
      fill={color}
    />
  </svg>
);

export default ArrowUpIcon;
