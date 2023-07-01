import React from 'react';
import { Empty, Table, Tabs } from 'antd';
import { observer } from 'mobx-react-lite';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Space from 'components/ui/atoms/space/Space';

import { ICandidate } from 'domain/entities/condidate';

import { useTableCompanyColumns } from 'pages/students/components/tableCompany/hooks/useTableCompanyColumns';

export interface SortedCandidatesByGroup {
  sortedCandidatesByGroup:{
    groupNumber: string
    candidates: ICandidate[]
  }[]
}

const TableCompany: React.FC<SortedCandidatesByGroup> = ({ sortedCandidatesByGroup }) => {
  const { columns } = useTableCompanyColumns();

  if (sortedCandidatesByGroup.length <= 0) {
    return (
      <Empty />
    );
  }

  return (
    <>
      <PageHeader header="Набор студентов" />
      <Space direction="vertical" gap={20}>
        <Tabs
          tabPosition="left"
          items={
            sortedCandidatesByGroup.map((group) => ({
              label: group.groupNumber,
              key: group.groupNumber,
              children: <Table
                columns={columns}
                dataSource={
                  group.candidates.map((candidate) => {
                    const { vacancy, student } = candidate;
                    const { firstname, lastname, patronymic } = student;
                    return {
                      student: `${lastname} ${firstname} ${patronymic}`,
                      vacancy: {
                        name: vacancy.name,
                        techStack: vacancy.techStack,
                      },
                      action: {
                        selectionStatus: candidate.selection.status,
                        selectionId: candidate.selection.id,
                      },
                    };
                  })
              }
              />,
            }))

          }
        />
      </Space>
    </>
  );
};

export default observer(TableCompany);
