import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import { VacancyWrapper } from 'components/ui/molecules/vacancy/styled';
import Text from 'components/ui/atoms/text/Text';
import { VacancyProps } from 'components/ui/molecules/vacancy/Vacancy';

import StackComponent from 'pages/vacancies/components/companyVacancy/components/Stack';

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

    <Space direction="vertical" paddingLeft={30} gap={5}>
      {
        stacks.map((stack) => (
          <StackComponent
            key={stack.id}
            stack={stack}
            name={name}
            onEditHandler={onEditHandler}
            deleteVacancy={deleteVacancy}
          />
        ))
      }
    </Space>
  </Space>
);
