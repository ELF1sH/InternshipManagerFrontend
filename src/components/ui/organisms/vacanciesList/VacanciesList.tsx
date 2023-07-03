/* eslint-disable max-len */
import React, { useCallback } from 'react';
import { Empty } from 'antd';
import { Link, useNavigate } from 'react-router-dom';

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
  vacancies: GroupedVacancy[];
}
interface GroupedVacancy {
  name: string;
  vacancies: IVacancy[];
}

const VacanciesList: React.FC<VacanciesListProps> = ({ companiesWithVacancies }) => {
  if (companiesWithVacancies.length <= 0) {
    return (
      <Empty description="Ничего не найдено" />
    );
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const handleOnClick = useCallback((id: number) => navigate(`/companies/${id}`, { replace: true }), [navigate]);
  return (
    <>
      {
        companiesWithVacancies.map(({
          id, name, minQuantity, maxQuantity, vacancies,
        }) => (
          <Space direction="vertical" key={id} gap={10}>
            <Link to={{ pathname: `/companies/${id}` }}>
              <Company name={name} minQuantity={minQuantity} maxQuantity={maxQuantity} />
            </Link>
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
