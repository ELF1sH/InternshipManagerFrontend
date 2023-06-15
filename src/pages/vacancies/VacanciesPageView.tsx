import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import VacanciesList from 'components/ui/organisms/vacanciesList/VacanciesList';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';
import FilterForm from 'pages/vacancies/components/filterForm/FilterForm';

const VacanciesPageView: React.FC = () => {
  const { companiesWithVacancies } = useVacanciesPageViewModel();
  return (
    <>
      <PageHeader header="Вакансии" />
      <Space direction="vertical" gap={20}>
        <FilterForm />
        <VacanciesList companiesWithVacancies={companiesWithVacancies} />
      </Space>
    </>
  );
};

export default VacanciesPageView;
