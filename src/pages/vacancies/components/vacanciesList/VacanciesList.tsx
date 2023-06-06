import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import Vacancy from 'components/ui/molecules/vacancy/Vacancy';
import Company from 'components/ui/molecules/company/Company';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';

const VacanciesList: React.FC = () => {
  const { companiesWithVacancies } = useVacanciesPageViewModel();

  return (
    <>
      {
        companiesWithVacancies.map(({
          name, minQuantity, maxQuantity, vacancies,
        }, idx) => (
          <Space direction="vertical" key={idx} gap={10}>
            <Company name={name} minQuantity={minQuantity} maxQuantity={maxQuantity} />
            <Space paddingLeft={40} direction="vertical">
              {
                vacancies.map(({ name, vacancies }) => (
                  <Vacancy
                    key={name}
                    name={name}
                    stacks={vacancies}
                  />
                ))
              }
            </Space>
          </Space>
        ))
      }
    </>
  );
};

export default VacanciesList;
