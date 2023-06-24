import { createContext, useContext } from 'react';

import { ProfilePageViewModel } from 'pages/profile/viewModel/index';

export const ProfilePageViewModelContext = createContext<
  ProfilePageViewModel | undefined
>(undefined);

export const useProfilePageViewModel = () => {
  const vm = useContext(ProfilePageViewModelContext);

  if (!vm) throw new Error('Hook was used outside of a context');

  return vm;
};
