import React, { useEffect, useState } from 'react';
import { Empty, Spin } from 'antd';

import { StackWrapper, VacancyWrapper } from 'components/ui/molecules/vacancy/styled';
import Text from 'components/ui/atoms/text/Text';
import Space from 'components/ui/atoms/space/Space';
import SelectionStatusInfo from 'components/ui/molecules/selectionStatus/SelectionStatus';

import { ISelection } from 'domain/entities/selection';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';

interface ExpandedRowProps {
  id: number;
}

const ExpandedRow: React.FC<ExpandedRowProps> = ({ id }) => {
  const { getSelectionsByStudent } = useStudentsPageViewModel();

  const [selections, setSelections] = useState<ISelection[] | undefined>(undefined);

  useEffect(() => {
    getSelectionsByStudent.fetch({
      payload: { studentId: id },
      onSuccess: (res) => {
        setSelections(res);
      },
    });
  }, []);

  if (!selections) return <Space justifyContent="center"><Spin /></Space>;

  if (!selections.length) return <Empty description="Нет данных" />;

  return (
    <>
      {
        selections.map(({ vacancy, status }) => (
          <Space key={vacancy.id} alignItems="center" gap={10}>
            <Space direction="vertical" gap={1}>
              <VacancyWrapper paddingLeft={30} direction="vertical">
                <Text>
                  Вакансия:
                  &nbsp;
                  <Text $primary strong>{vacancy.name}</Text>
                </Text>
              </VacancyWrapper>

              <Space direction="vertical" paddingLeft={30}>
                <StackWrapper paddingLeft={25}>
                  <Space direction="vertical">
                    <Text>
                      Стэк технологий:
                      &nbsp;
                      <Text strong>{vacancy.techStack}</Text>
                    </Text>
                    <Text>
                      Количество вакантных мест:
                      &nbsp;
                      <Text strong>{`${vacancy.minimumQuantity}-${vacancy.maximumQuantity}`}</Text>
                    </Text>
                  </Space>
                </StackWrapper>
              </Space>
            </Space>
            <Space direction="vertical" style={{ width: 'fit-content' }}>
              <img alt={vacancy.company.name} src={vacancy.company.imageUrl} />
            </Space>
            <Space alignItems="center" gap={5}>
              <SelectionStatusInfo status={status} />
            </Space>
          </Space>
        ))
      }
    </>
  );
};

export default ExpandedRow;
