import React, { useMemo } from 'react';

import { companyRepository } from 'domain/repositories/api/CompanyRepository';
import { GetCompanyListUseCase } from 'domain/useCases/company/GetCompanyListUseCase';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';
import { VacanciesPageViewModelContext } from 'pages/vacancies/viewModel/context';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';

const VacanciesPageProvider: React.FC = () => {
  const getVacancyListUseCase = new GetVacancyListUseCase({
    requestCallback: vacancyRepository.getList,
  });

  const getCompanyListUseCase = new GetCompanyListUseCase({
    requestCallback: companyRepository.getList,
  });

  const vacanciesPageViewModel = useMemo(
    () => new VacanciesPageViewModel(getCompanyListUseCase, getVacancyListUseCase),
    [],
  );

  return (
    <VacanciesPageViewModelContext.Provider value={vacanciesPageViewModel}>
      <ClassesGridController />
    </VacanciesPageViewModelContext.Provider>
  );
};

export default VacanciesPageProvider;
