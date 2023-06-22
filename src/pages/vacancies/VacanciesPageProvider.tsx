import React, { useMemo } from 'react';

import { companyRepository } from 'domain/repositories/api/CompanyRepository';
import { GetCompanyListUseCase } from 'domain/useCases/company/GetCompanyListUseCase';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';
import { EditVacancyUseCase } from 'domain/useCases/vacancy/EditVacancyUseCase';

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

  const addVacancyUseCase = new AddVacancyUseCase({
    requestCallback: vacancyRepository.createVacancy,
  });

  const editVacancyUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.createVacancy,
  });

  const addToSelectionsUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.addToSelections,
  });

  const getSelectionsUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.getSelections,
  });

  const vacanciesPageViewModel = useMemo(
    () => new VacanciesPageViewModel(
      getCompanyListUseCase,
      getVacancyListUseCase,
      addVacancyUseCase,
      editVacancyUseCase,
      addToSelectionsUseCase,
      getSelectionsUseCase,
    ),
    [],
  );

  return (
    <VacanciesPageViewModelContext.Provider value={vacanciesPageViewModel}>
      <ClassesGridController />
    </VacanciesPageViewModelContext.Provider>
  );
};

export default VacanciesPageProvider;
