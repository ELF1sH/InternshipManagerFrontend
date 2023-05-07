import React from 'react';
import { Breadcrumb, Tooltip } from 'antd';

import Link from 'components/ui/atoms/link/Link';
import { BreadcrumbItem } from 'components/ui/molecules/breadcrumb/types';

interface MyBreadcrumbProps {
  items: BreadcrumbItem[];
}

const getBreadcrumbItemReactNode = (item: BreadcrumbItem) => {
  if (item.to) {
    return (
      <Link to={item.to}>{item.text}</Link>
    );
  }

  return item.text;
};

const MyBreadcrumb: React.FC<MyBreadcrumbProps> = ({
  items,
}) => (
  <Breadcrumb
    style={{ marginBottom: '20px' }}
    items={items.map((item) => ({
      title: <Tooltip title={item.tooltip}><div>{getBreadcrumbItemReactNode(item)}</div></Tooltip>,
    }))}
  />
);

export default MyBreadcrumb;
