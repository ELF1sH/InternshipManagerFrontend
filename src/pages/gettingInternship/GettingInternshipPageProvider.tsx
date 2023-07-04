import React, { useMemo } from 'react';

import { AddToSelectionsUseCase } from 'domain/useCases/vacancy/AddToSelectionsUseCase';
import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { GetSelectionsUseCase } from 'domain/useCases/vacancy/GetSelectionsUseCase';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';

import { useNotifications } from 'modules/notification/useNotifications';

import { GettingInternshipPageViewModelContext } from 'pages/gettingInternship/viewModel/context';
import { GettingInternshipPageViewModel } from 'pages/gettingInternship/viewModel';
import GettingInternshipPageController from 'pages/gettingInternship/GettingInternshipPageController';

const GettingInternshipPageProvider: React.FC = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const getSelections = new GetSelectionsUseCase({
    requestCallback: vacancyRepository.getSelectionsList,
  });

  const addToSelectionsUseCase = new AddToSelectionsUseCase({
    requestCallback: vacancyRepository.addToSelections,
  });

  const patchPreferenceUseCase = new PatchSelectionUseCase({
    requestCallback: vacancyRepository.patchSelection,
    notifyError,
    notifySuccess,
  });

  const viewModel = useMemo(
    () => new GettingInternshipPageViewModel(
      getSelections,
      patchPreferenceUseCase,
      addToSelectionsUseCase,
    ),
    [],
  );

  return (
    <GettingInternshipPageViewModelContext.Provider value={viewModel}>
      <GettingInternshipPageController />
    </GettingInternshipPageViewModelContext.Provider>
  );
};

export default GettingInternshipPageProvider;
