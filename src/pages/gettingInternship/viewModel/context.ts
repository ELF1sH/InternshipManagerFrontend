import { createContext, useContext } from 'react';

import { GettingInternshipPageViewModel } from 'pages/gettingInternship/viewModel/index';

export const GettingInternshipPageViewModelContext = createContext<
  GettingInternshipPageViewModel | undefined
>(undefined);

export const useGettingInternshipPageViewModel = () => {
  const vm = useContext(GettingInternshipPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
