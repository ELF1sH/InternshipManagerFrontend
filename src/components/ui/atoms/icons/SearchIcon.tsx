import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const SearchIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14.25 2.25C10.116 2.25 6.75 5.616 6.75 9.75C6.75 11.5463 7.38 13.1925 8.4375 14.4847L2.46075 20.46L3.54 21.54L9.516 15.5632C10.8507 16.6575 12.5241 17.2537 14.25 17.25C18.384 17.25 21.75 13.884 21.75 9.75C21.75 5.616 18.384 2.25 14.25 2.25ZM14.25 3.75C17.5725 3.75 20.25 6.4275 20.25 9.75C20.25 13.0725 17.5725 15.75 14.25 15.75C10.9275 15.75 8.25 13.0725 8.25 9.75C8.25 6.4275 10.9275 3.75 14.25 3.75Z"
      fill={color}
    />
  </svg>
);

export default SearchIcon;
