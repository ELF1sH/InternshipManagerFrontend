import React from 'react';
import { useCycle } from 'framer-motion';

import SidebarItemView from 'components/ui/organisms/sidebar/components/linksContainer/components/sidebarItem/SidebarItemView';

interface SidebarItemControllerProps {
  text: string,
  isSidebarCollapsed: boolean,
  isActive?: boolean,
  to?: string;
  children?: React.ReactNode,
}

const SidebarItemController: React.FC<SidebarItemControllerProps> = ({
  text,
  isSidebarCollapsed,
  isActive = false,
  to = '/',
  children,
}) => {
  const [isClassTreeCollapsed, onCycle] = useCycle<boolean>(false, true);

  const onToggleClassTree = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();

    onCycle();
  };
  return (
    <SidebarItemView
      text={text}
      isSidebarCollapsed={isSidebarCollapsed}
      isActive={isActive}
      to={to}
    >
      { children }
    </SidebarItemView>
  );
};

export default SidebarItemController;
