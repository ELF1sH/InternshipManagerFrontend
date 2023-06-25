import React from 'react';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import { VacancyWrapper, StackWrapper } from 'components/ui/molecules/vacancy/styled';
import Text from 'components/ui/atoms/text/Text';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { VacancyProps } from 'components/ui/molecules/vacancy/Vacancy';

export const CompanyVacancy: React.FC<VacancyProps &
 {onEditHandler: (val: any) => void, deleteVacancy: (val: number) => void}> = ({
   name,
   stacks,
   onEditHandler,
   deleteVacancy,
 }) => (

   <Space direction="vertical" gap={10}>

     <VacancyWrapper paddingLeft={30} direction="vertical">
       <Text>
         Вакансия:
         &nbsp;
         <Text $primary strong>{name}</Text>
       </Text>
     </VacancyWrapper>
     <Space direction="vertical" paddingLeft={30}>
       {
        stacks.map(({
          techStack, maximumQuantity,
          minimumQuantity,
          id,
        }, idx) => (
          <StackWrapper paddingLeft={25} key={idx}>
            <Space gap={10}>
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
              <Space justifyContent="start" alignItems="start">
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
                <IconButton
                  size="large"
                  icon={<DeleteFilled />}
                  onClick={() => deleteVacancy(id)}
                />
              </Space>
            </Space>

            <Space justifyContent="end" alignItems="center">
              <Button type="primary" size="small" danger>Прекратить набор</Button>
            </Space>
          </StackWrapper>
        ))
    }
     </Space>

   </Space>

 );
