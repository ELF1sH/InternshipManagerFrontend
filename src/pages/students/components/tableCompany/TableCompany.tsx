import React from 'react';
import { Table, Tabs } from 'antd';
import { observer } from 'mobx-react-lite';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Space from 'components/ui/atoms/space/Space';

import { useTableCompanyColumns } from 'pages/students/components/tableCompany/hooks/useTableCompanyColumns';

const TableCompany: React.FC = () => {
  const { columns } = useTableCompanyColumns();

  return (
    <>
      <PageHeader header="Набор студентов" />
      <Space direction="vertical" gap={20}>
        <Tabs
          tabPosition="left"
          items={
            [
              {
                label: '2021-2022 (9720Р)',
                key: '2021-2022 (9720Р)',
                children: <Table
                  columns={columns}
                  dataSource={[{

                  }]}
                />,
              },
              {
                label: '2020-2021 (9719Р)',
                key: '2020-2021 (9719Р)',
                children: <div>2</div>,
              },
            ]
          }
        />
      </Space>
    </>
  );
};

export default observer(TableCompany);
