import React, { useMemo } from 'react';

import { GetCompanyListUseCase } from 'domain/useCases/company/GetCompanyListUseCase';
import { companyRepository } from 'domain/repositories/api/CompanyRepository';
import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { PostPreferenceUseCase } from 'domain/useCases/preferences/PostPreferenceUseCase';
import { GetPreferencesListUseCase } from 'domain/useCases/preferences/GetPreferencesListUseCase';
import { preferencesRepository } from 'domain/repositories/api/PreferencesList';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';
import { EditVacancyUseCase } from 'domain/useCases/vacancy/EditVacancyUseCase';
import { DeleteVacancyUseCase } from 'domain/useCases/vacancy/DeleteVacancyUseCase';
import { GetSelectionsUseCase } from 'domain/useCases/vacancy/GetSelectionsUseCase';
import { AddToSelectionsUseCase } from 'domain/useCases/vacancy/AddToSelectionsUseCase';
import { AddCompanyUseCase } from 'domain/useCases/company/AddCompanyUseCase';

import { useNotifications } from 'modules/notification/useNotifications';

import { useDownloadCompanyCreationResult } from 'pages/vacancies/modals/downloadCompanyCreationResult';
import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';
import { VacanciesPageViewModelContext } from 'pages/vacancies/viewModel/context';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';

const VacanciesPageProvider: React.FC = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const { openDownloadCompanyCreationResult } = useDownloadCompanyCreationResult();

  const getVacancyListUseCase = new GetVacancyListUseCase({
    requestCallback: vacancyRepository.getList,
  });

  const getCompaniesList = new GetCompanyListUseCase({
    requestCallback: companyRepository.getList,
  });

  const addVacancyUseCase = new AddVacancyUseCase({
    requestCallback: vacancyRepository.createVacancy,
  });

  const editVacancyUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.editVacancy,
  });

  const addToSelectionsUseCase = new AddToSelectionsUseCase({
    requestCallback: vacancyRepository.addToSelections,
  });

  const deleteVacancyUseCase = new DeleteVacancyUseCase({
    requestCallback: vacancyRepository.deleteVacancy,
  });

  const getSelectionsUseCase = new GetSelectionsUseCase({
    requestCallback: vacancyRepository.getSelectionsList,
  });

  const getPreferencesUseCase = new GetPreferencesListUseCase({
    requestCallback: preferencesRepository.getList,
  });

  const postPreferenceUseCase = new PostPreferenceUseCase({
    requestCallback: preferencesRepository.post,
    notifySuccess,
    notifyError,
  });

  const patchPreferenceUseCase = new PatchSelectionUseCase({
    requestCallback: vacancyRepository.patchSelection,
    notifyError,
    notifySuccess,
  });

  const addCompaniesListUseCase = new AddCompanyUseCase({
    requestCallback: companyRepository.addCompany,
  });

  const vacanciesPageViewModel = useMemo(
    () => new VacanciesPageViewModel(
      getVacancyListUseCase,
      getCompaniesList,
      addVacancyUseCase,
      addToSelectionsUseCase,
      getSelectionsUseCase,
      editVacancyUseCase,
      deleteVacancyUseCase,
      getPreferencesUseCase,
      postPreferenceUseCase,
      patchPreferenceUseCase,
      addCompaniesListUseCase,
      openDownloadCompanyCreationResult,
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
