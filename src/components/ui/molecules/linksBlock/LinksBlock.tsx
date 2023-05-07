import React from 'react';
import Title from 'antd/es/typography/Title';
import { Row } from 'antd';

import { TwoColumns } from 'components/ui/layout/twoColumns/TwoColumns';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { LinksBlockWrapper } from 'components/ui/molecules/linksBlock/styled';
import LinkWithIcon from 'components/ui/atoms/LinkWithIcon/LinkWithIcon';
import FileAltIcon from 'components/ui/atoms/icons/FileAltIcon';
import { LinksBlockItem } from 'components/ui/molecules/linksBlock/types';

interface LinksBlockProps {
  links: LinksBlockItem[];
  title: string;
  activeLinkId?: string;
}

const LinksBlock: React.FC<LinksBlockProps> = ({
  links,
  title,
  activeLinkId,
}) => (
  <LinksBlockWrapper>
    <Row justify="center">
      <Title level={4}>{title}</Title>
    </Row>
    {
      links.map(({
        text, to, id, onAdd,
      }, idx) => (
        <TwoColumns key={idx}>
          <div>
            <LinkWithIcon
              icon={<FileAltIcon />}
              to={to}
              primary={activeLinkId === id}
            >
              {text}
            </LinkWithIcon>
          </div>
          {
            onAdd && <IconButton size="large" icon={<PlusIcon />} />
          }
        </TwoColumns>
      ))
    }
  </LinksBlockWrapper>
);

export default LinksBlock;
