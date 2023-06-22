import { createContext, useContext } from 'react';

import { ProfileViewModel } from 'pages/profile/viewModel';

export const ProfilePageViewModelContext = createContext<
  ProfileViewModel | undefined
  >(undefined);

export const useProfilePageViewModel = () => {
  const vm = useContext(ProfilePageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
