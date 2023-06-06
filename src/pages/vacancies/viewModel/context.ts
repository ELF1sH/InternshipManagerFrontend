import { createContext, useContext } from 'react';

import { VacanciesPageViewModel } from 'pages/vacancies/viewModel';

export const VacanciesPageViewModelContext = createContext<
  VacanciesPageViewModel | undefined
  >(undefined);

export const useVacanciesPageViewModel = () => {
  const vm = useContext(VacanciesPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
