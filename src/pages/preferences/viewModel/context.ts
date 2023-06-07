import { createContext, useContext } from 'react';

import { PreferencesPageViewModel } from 'pages/preferences/viewModel';

export const PreferencesPageViewModelContext = createContext<
  PreferencesPageViewModel | undefined
  >(undefined);

export const usePreferencesPageViewModel = () => {
  const vm = useContext(PreferencesPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
