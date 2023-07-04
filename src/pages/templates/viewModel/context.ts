import { createContext, useContext } from 'react';

import { TemplatesPageViewModel } from 'pages/templates/viewModel';

export const TemplatesPageViewModelContext = createContext<
  TemplatesPageViewModel | undefined
>(undefined);

export const useTemplatesPageViewModel = () => {
  const vm = useContext(TemplatesPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
