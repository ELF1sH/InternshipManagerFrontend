import React from 'react';
import { Empty } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Vacancy from 'components/ui/molecules/vacancy/Vacancy';
import Company from 'components/ui/molecules/company/Company';

import { IVacancy } from 'domain/entities/vacancy';

export interface VacanciesListProps {
  companiesWithVacancies: CompanyWithVacancies[];
}
export interface CompanyWithVacancies {
  id: number;
  name: string;
  minQuantity: number;
  maxQuantity: number;
  imageUrl?: string
  vacancies: GroupedVacancy[];
}
interface GroupedVacancy {
  name: string;
  vacancies: IVacancy[];
}

const VacanciesList: React.FC<VacanciesListProps> = ({ companiesWithVacancies }) => {
  console.log(companiesWithVacancies);

  if (companiesWithVacancies.length <= 0) {
    return (
      <Empty description="Ничего не найдено" />
    );
  }

  return (
    <>
      {
        companiesWithVacancies.map(({
          id, name, minQuantity, maxQuantity, vacancies, imageUrl,
        }) => (
          <Space direction="vertical" key={id} gap={10}>
            <Company
              name={name}
              minQuantity={minQuantity}
              maxQuantity={maxQuantity}
              imageUrl={imageUrl}
            />
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
