import React, { useMemo } from 'react';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { profilesRepository } from 'domain/repositories/api/interfaces/ProfilesRepository';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';
import { GetIntershipHistoryUseCase } from 'domain/useCases/profiles/GetIntershipHistoryUseCase';
import { internshipHistoryRepository } from 'domain/repositories/api/IntershipHistoryRepository';

import { ProfilePageViewModelContext } from 'pages/profile/viewModel/context';
import { ProfilePageViewModel } from 'pages/profile/viewModel';
import ProfilePageController from 'pages/profile/ProfilePageController';

const ProfilePageProvider: React.FC = () => {
  const getProfileUseCase = new GetProfileUseCase({
    requestCallback: profilesRepository.getProfile,
  });

  const getDiariesUseCase = new GetDiariesListUseCase({
    requestCallback: diaryRepository.getList,
  });

  const getIntershipHistoryUseCase = new GetIntershipHistoryUseCase({
    requestCallback: internshipHistoryRepository.getList,
  });

  const viewModel = useMemo(
    () => new ProfilePageViewModel(
      getProfileUseCase,
      getDiariesUseCase,
      getIntershipHistoryUseCase,
    ),
    [],
  );

  return (
    <ProfilePageViewModelContext.Provider value={viewModel}>
      <ProfilePageController />
    </ProfilePageViewModelContext.Provider>
  );
};

export default ProfilePageProvider;
