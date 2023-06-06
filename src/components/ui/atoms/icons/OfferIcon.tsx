import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const OfferIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20ZM19.586 6L12 13.586L4.414 6H19.586ZM4 8.414L12 16.414L20 8.414V18H4V8.414Z"
      fill={color}
    />
  </svg>
);

export default OfferIcon;
