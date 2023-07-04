import { createContext, useContext } from 'react';

import { DiariesPageViewModel } from 'pages/diaries/viewModel';

export const DiariesPageViewModelContext = createContext<
  DiariesPageViewModel | undefined
>(undefined);

export const useDiariesPageViewModel = () => {
  const vm = useContext(DiariesPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
