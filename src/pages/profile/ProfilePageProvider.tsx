import React, { useMemo } from 'react';

import { profilesRepository } from 'domain/repositories/api/interfaces/ProfilesRepository';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';

import { ProfilePageViewModelContext } from 'pages/profile/viewModel/context';
import { ProfilePageViewModel } from 'pages/profile/viewModel';
import ProfilePageController from 'pages/profile/ProfilePageController';

const ProfilePageProvider: React.FC = () => {
  const getProfileUseCase = new GetProfileUseCase({
    requestCallback: profilesRepository.getProfile,
  });

  const viewModel = useMemo(
    () => new ProfilePageViewModel(getProfileUseCase),
    [],
  );

  return (
    <ProfilePageViewModelContext.Provider value={viewModel}>
      <ProfilePageController />
    </ProfilePageViewModelContext.Provider>
  );
};

export default ProfilePageProvider;
