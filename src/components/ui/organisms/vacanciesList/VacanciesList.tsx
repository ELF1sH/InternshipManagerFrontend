import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import Vacancy from 'components/ui/molecules/vacancy/Vacancy';
import Company from 'components/ui/molecules/company/Company';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';

const VacanciesList: React.FC< {companiesWithVacancies: VacanciesPageViewModel['companiesWithVacancies']}> = (
  { companiesWithVacancies },
) => (
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

export default VacanciesList;
