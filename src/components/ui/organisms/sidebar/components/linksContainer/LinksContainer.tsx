import React from 'react';
import { observer } from 'mobx-react-lite';

import SidebarItem from 'components/ui/organisms/sidebar/components/linksContainer/components/sidebarItem/SidebarItemController';
import { Wrapper } from 'components/ui/organisms/sidebar/components/linksContainer/styled';
import { useSidebarLinks } from 'components/ui/organisms/sidebar/components/linksContainer/hooks/useSidebarLinks';

interface LinksContainerProps {
  isSidebarCollapsed: boolean;
}

const LinksContainer: React.FC<LinksContainerProps> = ({ isSidebarCollapsed }) => {
  const sidebarLinks = useSidebarLinks();

  return (
    <Wrapper>
      {
        sidebarLinks.map((link, idx) => (
          <SidebarItem
            text={link.text}
            isSidebarCollapsed={isSidebarCollapsed}
            to={link.to}
            key={idx}
          >
            <link.icon />
          </SidebarItem>
        ))
      }
    </Wrapper>
  );
};

export default observer(LinksContainer);
