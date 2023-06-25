import React, { useMemo } from 'react';

import { DeletePreferencesListUseCase } from 'domain/useCases/preferences/DeletePreferencesListUseCase';
import { PatchPreferencesListUseCase } from 'domain/useCases/preferences/PatchPreferencesListUseCase';
import { preferencesRepository } from 'domain/repositories/api/PreferencesList';
import { GetPreferencesListUseCase } from 'domain/useCases/preferences/GetPreferencesListUseCase';

import { PreferencesPageViewModel } from 'pages/preferences/viewModel';
import { PreferencesPageViewModelContext } from 'pages/preferences/viewModel/context';
import PreferencesPageController from 'pages/preferences/PreferencesPageController';

const PreferencesPageProvider: React.FC = () => {
  const getPreferencesUseCase = new GetPreferencesListUseCase({
    requestCallback: preferencesRepository.getList,
  });

  const patchPreferenceUseCase = new PatchPreferencesListUseCase({
    requestCallback: preferencesRepository.patch,
  });

  const deletePreferenceUseCase = new DeletePreferencesListUseCase({
    requestCallback: preferencesRepository.delete,
  });

  const viewModel = useMemo(
    () => new PreferencesPageViewModel(
      getPreferencesUseCase,
      patchPreferenceUseCase,
      deletePreferenceUseCase,
    ),
    [],
  );

  return (
    <PreferencesPageViewModelContext.Provider value={viewModel}>
      <PreferencesPageController />
    </PreferencesPageViewModelContext.Provider>
  );
};

export default PreferencesPageProvider;
