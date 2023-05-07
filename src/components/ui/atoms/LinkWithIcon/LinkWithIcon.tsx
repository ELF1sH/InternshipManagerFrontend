import React from 'react';
import { LinkProps } from 'react-router-dom';

import { RouterLinkLeftSide, RouterLinkStyled } from 'components/ui/atoms/LinkWithIcon/styled';

interface LinkWithIconProps extends LinkProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  active?: boolean;
  primary?: boolean;
  bold?: boolean;
  rightIcon?: React.ReactNode;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  to,
  icon,
  children,
  active = false,
  primary = false,
  bold = false,
  rightIcon,
}) => (
  <RouterLinkStyled
    to={to}
    $primary={primary}
    $bold={bold}
    $active={active}
  >
    <RouterLinkLeftSide>
      {icon}
      {children}
    </RouterLinkLeftSide>
    {rightIcon ?? null}
  </RouterLinkStyled>
);

export default LinkWithIcon;
