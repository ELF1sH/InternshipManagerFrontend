import { createContext, useContext } from 'react';

import { StudentsPageViewModel } from '.';

export const StudentsPageViewModelContext = createContext<
  StudentsPageViewModel | undefined
  >(undefined);

export const useStudentsPageViewModel = () => {
  const vm = useContext(StudentsPageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
