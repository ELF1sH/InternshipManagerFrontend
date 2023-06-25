import React, { useMemo } from 'react';

import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { PostPreferenceUseCase } from 'domain/useCases/preferences/PostPreferenceUseCase';
import { GetPreferencesListUseCase } from 'domain/useCases/preferences/GetPreferencesListUseCase';
import { preferencesRepository } from 'domain/repositories/api/PreferencesList';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { AddVacancyUseCase } from 'domain/useCases/vacancy/AddVacancyUseCase';
import { EditVacancyUseCase } from 'domain/useCases/vacancy/EditVacancyUseCase';

import { useNotifications } from 'modules/notification/useNotifications';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';
import { VacanciesPageViewModelContext } from 'pages/vacancies/viewModel/context';
import ClassesGridController from 'pages/vacancies/VacanciesPageController';

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

  const addToSelectionsUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.addToSelections,
  });

  const getSelectionsUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.getSelections,
  });

  const deleteVacancyUseCase = new EditVacancyUseCase({
    requestCallback: vacancyRepository.deleteVacancy,
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
    </VacanciesPageViewModelContext.Provider>
  );
};

export default VacanciesPageProvider;
