import React, { useMemo } from 'react';

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

import { useNotifications } from 'modules/notification/useNotifications';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';
import { VacanciesPageViewModelContext } from 'pages/vacancies/viewModel/context';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';
import ClassesGridController2 from 'pages/vacancies/CompanyPageController';

const VacanciesPageProvider: React.FC = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const getVacancyListUseCase = new GetVacancyListUseCase({
    requestCallback: vacancyRepository.getList,
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

  const vacanciesPageViewModel = useMemo(
    () => new VacanciesPageViewModel(
      getVacancyListUseCase,
      addVacancyUseCase,
      addToSelectionsUseCase,
      getSelectionsUseCase,
      editVacancyUseCase,
      deleteVacancyUseCase,
      getPreferencesUseCase,
      postPreferenceUseCase,
      patchPreferenceUseCase,
    ),
    [],
  );

  return (
    <VacanciesPageViewModelContext.Provider value={vacanciesPageViewModel}>
      <ClassesGridController />
      <ClassesGridController2 />
    </VacanciesPageViewModelContext.Provider>
  );
};

export default VacanciesPageProvider;
