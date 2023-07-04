import React from 'react';
import { observer } from 'mobx-react-lite';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import InterviewButton from 'components/ui/molecules/vacancy/components/actions/components/InterviewButton';
import OfferButton from 'components/ui/molecules/vacancy/components/actions/components/OfferButton';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import AcceptOfferButton from 'components/ui/molecules/vacancy/components/actions/components/AcceptOfferButton';

import { ISelection } from 'domain/entities/selection';

import { useGettingInternshipPageViewModel } from 'pages/gettingInternship/viewModel/context';

export interface IGettingInternshipTableRow {
  company: string;
  vacancy: [string, string];
  status: ISelection;
}

const GettingInternshipPageView: React.FC = () => {
  const { selectionsRows, patchSelection, addToSelections } = useGettingInternshipPageViewModel();

  const columns: ColumnsType<IGettingInternshipTableRow> = [
    {
      title: 'Компания',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Вакансия',
      dataIndex: 'vacancy',
      key: 'vacancy',
      render: (_any, record: IGettingInternshipTableRow) => (
        <>
          <Text>{record.vacancy[0]}</Text>
          <br />
          <Text>{record.vacancy[1]}</Text>
        </>
      ),
    },
    {
      title: 'Ваш статус',
      dataIndex: 'status',
      key: 'status',
      render: (_any, { status }: IGettingInternshipTableRow) => (
        <Space alignItems="center" gap={5}>
          <InterviewButton id={status.id} isSelected={status} addToSelections={addToSelections} />
          <OfferButton isSelected={status} />
          <AcceptOfferButton id={status.id} isSelected={status} patchSelection={patchSelection} />
        </Space>
      ),
    },
  ];

  return (
    <>
      <PageHeader header="Статусы получения стажировок" />
      <Table
        rowKey="vacancy"
        dataSource={selectionsRows}
        columns={columns}
      />
    </>
  );
};

export default observer(GettingInternshipPageView);
