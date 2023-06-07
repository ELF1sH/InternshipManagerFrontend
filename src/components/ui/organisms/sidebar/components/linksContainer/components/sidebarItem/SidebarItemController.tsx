import React from 'react';
import { useLocation } from 'react-router-dom';

import SidebarItemView from 'components/ui/organisms/sidebar/components/linksContainer/components/sidebarItem/SidebarItemView';

interface SidebarItemControllerProps {
  text: string,
  isSidebarCollapsed: boolean,
  to?: string;
  children?: React.ReactNode,
}

const SidebarItemController: React.FC<SidebarItemControllerProps> = ({
  text,
  isSidebarCollapsed,
  to = '/',
  children,
}) => {
  const { pathname } = useLocation();
  const curSubDirectory = `/${pathname.split('/')[1]}`;

  return (
    <SidebarItemView
      text={text}
      isSidebarCollapsed={isSidebarCollapsed}
      isActive={to === curSubDirectory}
      to={to}
    >
      { children }
    </SidebarItemView>
  );
};

export default SidebarItemController;
