import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const ArrowDownIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
      fill={color}
    />
  </svg>
);

export default ArrowDownIcon;
