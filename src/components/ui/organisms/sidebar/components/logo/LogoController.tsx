import React from 'react';

import LogoView from 'components/ui/organisms/sidebar/components/logo/LogoView';

interface LogoControllerProps {
  isSidebarCollapsed: boolean,
}

const LogoController: React.FC<LogoControllerProps> = ({
  isSidebarCollapsed,
}) => (
  <LogoView isSidebarCollapsed={isSidebarCollapsed} />
);

export default LogoController;
