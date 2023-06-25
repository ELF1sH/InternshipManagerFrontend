import React from 'react';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import { Stack } from 'components/ui/molecules/vacancy/Vacancy';
import { StackWrapper } from 'components/ui/molecules/vacancy/styled';
import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import Button from 'components/ui/atoms/button/Button';

import { useConfirmModal } from 'modules/confirmModal/useConfirmModal';

interface StackProps {
  stack: Stack;
  name: string;
  onEditHandler: (val: any) => void;
  deleteVacancy: (val: number) => void;
}

const StackComponent: React.FC<StackProps> = ({
  stack,
  name,
  onEditHandler,
  deleteVacancy,
}) => {
  const {
    id, techStack, minimumQuantity, maximumQuantity,
  } = stack;

  const { showConfirm } = useConfirmModal({
    title: 'Вы действительно хотите удалить эту вакансию?',
    cbOnOk: () => deleteVacancy(id),
  });

  return (
    <StackWrapper paddingLeft={25} key={id} gap={30}>
      <Space gap={10}>
        <Space direction="vertical">
          <Text>
            Стэк технологий:
            &nbsp;
            <Text strong>{techStack}</Text>
          </Text>
          <Text>
            Количество вакантных мест:
            &nbsp;
            <Text strong>{`${minimumQuantity}-${maximumQuantity}`}</Text>
          </Text>
        </Space>
        <Space justifyContent="start" alignItems="center" style={{ width: 'fit-content' }}>
          <IconButton
            size="large"
            icon={<EditFilled />}
            onClick={() => onEditHandler({
              id,
              name,
              techStack,
              minimumQuantity,
              maximumQuantity,
            })}
          />
          <IconButton size="large" icon={<DeleteFilled />} onClick={showConfirm} />
        </Space>
      </Space>

      <Space alignItems="center" style={{ width: 'fit-content' }}>
        <Button type="primary" size="small" danger>Прекратить набор</Button>
      </Space>
    </StackWrapper>
  );
};

export default StackComponent;
