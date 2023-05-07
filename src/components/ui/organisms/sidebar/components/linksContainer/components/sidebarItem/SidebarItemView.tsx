import React from 'react';

import LinkWithIcon from 'components/ui/atoms/LinkWithIcon/LinkWithIcon';
import { SidebarLinkWrapper } from 'components/ui/organisms/sidebar/components/linksContainer/components/sidebarItem/styled';

interface SidebarItemViewProps {
  text: string;
  isSidebarCollapsed: boolean;
  isActive: boolean;
  to: string;
  children?: React.ReactNode;
}

const SidebarItemView: React.FC<SidebarItemViewProps> = ({
  text,
  isSidebarCollapsed,
  isActive,
  to,
  children,
}) => (
  <div>
    <SidebarLinkWrapper>
      <LinkWithIcon
        icon={children}
        active={isActive}
        bold
        to={to}
      >
        {!isSidebarCollapsed && text}
      </LinkWithIcon>
    </SidebarLinkWrapper>
  </div>
);

export default SidebarItemView;
