import React from 'react';

import { IconProps } from 'components/ui/atoms/icons/interfaces/iconProps';

const ListAltIcon: React.FC<IconProps> = ({ size = 24, color = 'currentColor', ...restProps }) => (
  <svg {...restProps} width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.71074 3.96094L5.24999 6.42244L4.28924 5.46019L3.20999 6.54019L4.70999 8.04019L5.24924 8.55544L5.78849 8.04019L8.78849 5.04019L7.71074 3.96094ZM11.25 5.25019V6.75019H21V5.25019H11.25ZM7.71074 9.96094L5.24999 12.4217L4.28924 11.4617L3.21074 12.5394L4.71074 14.0394L5.24999 14.5547L5.78924 14.0394L8.78924 11.0394L7.71074 9.96094ZM11.25 11.2502V12.7502H21V11.2502H11.25ZM7.71074 15.9609L5.24999 18.4224L4.28924 17.4602L3.20999 18.5402L4.70999 20.0402L5.24924 20.5554L5.78849 20.0402L8.78849 17.0402L7.71074 15.9609ZM11.25 17.2502V18.7502H21V17.2502H11.25Z"
      fill={color}
    />
  </svg>
);

export default ListAltIcon;
