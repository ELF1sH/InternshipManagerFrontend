import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';

import VacanciesList from 'pages/vacancies/components/vacanciesList/VacanciesList';
import FilterForm from 'pages/vacancies/components/filterForm/FilterForm';

const VacanciesPageView: React.FC = () => (
  <>
    <PageHeader header="Вакансии" />
    <Space direction="vertical" gap={20}>
      <FilterForm />
      <VacanciesList />
    </Space>
  </>
);

export default VacanciesPageView;
