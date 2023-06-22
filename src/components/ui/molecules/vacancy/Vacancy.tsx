import React from 'react';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { StackWrapper, VacancyWrapper } from 'components/ui/molecules/vacancy/styled';
import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';

export interface VacancyProps {
 name: string;
 stacks: Stack[];
}

interface Stack {
  techStack: string;
  minimumQuantity: number;
  maximumQuantity: number;
}

const Vacancy: React.FC<VacancyProps> = ({
  name,
  stacks,
}) => (
  <Space direction="vertical" gap={1}>
    <VacancyWrapper paddingLeft={30} direction="vertical">
      <Text>
        Вакансия:
        &nbsp;
        <Text $primary strong>{name}</Text>
      </Text>
    </VacancyWrapper>
    <Space direction="vertical" paddingLeft={30}>
      {
          stacks.map(({ techStack, minimumQuantity, maximumQuantity }, idx) => (
            <StackWrapper key={idx} paddingLeft={25}>
              <Space direction="vertical" style={{ flexGrow: 1 }}>
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
              <Space justifyContent="end" alignItems="center">
                <Tooltip title="Добавить в список предпочтений" placement="left">
                  <IconButton size="large" icon={<PlusCircleOutlined />} style={{ marginRight: '20px' }} />
                </Tooltip>
                <IconButton size="large" icon={<OfferIcon />} />
                <IconButton size="large" icon={<AcceptedOffer />} />
              </Space>
            </StackWrapper>
          ))
        }
    </Space>
  </Space>
);

export default Vacancy;
