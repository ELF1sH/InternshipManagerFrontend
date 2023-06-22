import React from 'react';

import { StyledLink, StyledRouterLink } from 'components/ui/atoms/link/styled';

interface LinkProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  className?: string;
  onClick?: () => void,
}

const Link: React.FC<LinkProps> = ({
  children,
  href,
  to,
  onClick,
  className = '',
}) => (
  to ? (
    <StyledRouterLink to={to} className={className} onClick={onClick}>
      {children}
    </StyledRouterLink>
  ) : (
    <StyledLink href={href} className={className} onClick={onClick}>
      <div>
        {children}
      </div>
    </StyledLink>
  )
);

export default Link;
