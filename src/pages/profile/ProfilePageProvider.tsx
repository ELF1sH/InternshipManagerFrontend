import React, { useMemo } from 'react';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { profilesRepository } from 'domain/repositories/api/ProfilesRepository';
import { GetProfileUseCase } from 'domain/useCases/profiles/GetProfileUseCase';
import { GetIntershipHistoryUseCase } from 'domain/useCases/profiles/GetIntershipHistoryUseCase';
import { GetVacancyListUseCase } from 'domain/useCases/vacancy/GetVacancyListUseCase';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';
import { PostIntershipUseCase } from 'domain/useCases/profiles/PostIntershipUseCase';
import { PatchIntershipHistoryByVacancyUseCase } from 'domain/useCases/profiles/PatchIntershipHistoryByVacancyUseCase copy';
import { GetFeedbackListUseCase } from 'domain/useCases/feedback/GetFeedbackListUseCase';
import { feedbackRepository } from 'domain/repositories/api/FeedbackRepository';
import { GetStudentUseCase } from 'domain/useCases/students/GetStudentUseCase';
import { studentsRepository } from 'domain/repositories/api/StudentsRepository';
import { GetIntershipHistoryByIdUseCase } from 'domain/useCases/profiles/GetIntershipHistoryByIdUseCase';
import { internshipHistoryRepository } from 'domain/repositories/api/IntershipHistoryRepository';
import { GetSelectionsByIdUseCase } from 'domain/useCases/vacancy/GetSelectionsByIdUseCase';
import { GetPreferencesListByIdUseCase } from 'domain/useCases/preferences/GetPreferencesListByIdUseCase';
import { preferencesRepository } from 'domain/repositories/api/PreferencesList';
import { GetDiariesListByIdUseCase } from 'domain/useCases/diary/GetDiariesListByIdUseCase';

import { ProfilePageViewModelContext } from 'pages/profile/viewModel/context';
import { ProfilePageViewModel } from 'pages/profile/viewModel';
import ProfilePageController from 'pages/profile/ProfilePageController';

interface ProfilePageProviderProps {
  id?: number;
}

const ProfilePageProvider: React.FC<ProfilePageProviderProps> = ({ id }) => {
  const getProfileUseCase = new GetProfileUseCase({
    requestCallback: profilesRepository.getProfile,
  });

  const getDiariesUseCase = new GetDiariesListUseCase({
    requestCallback: diaryRepository.getDiaries,
  });

  const getIntershipHistoryUseCase = new GetIntershipHistoryUseCase({
    requestCallback: internshipHistoryRepository.getList,
  });

  const getVacancyListUseCase = new GetVacancyListUseCase({
    requestCallback: vacancyRepository.getList,
  });

  const patchInternshipUseCase = new PatchIntershipHistoryByVacancyUseCase({
    requestCallback: internshipHistoryRepository.patchByVacancy,
  });

  const createInternshipUseCase = new PostIntershipUseCase({
    requestCallback: internshipHistoryRepository.postInternship,
  });

  const getFeedbackUseCase = new GetFeedbackListUseCase({
    requestCallback: feedbackRepository.getList,
  });

  const getStudentUseCase = new GetStudentUseCase({
    requestCallback: studentsRepository.getStudent,
  });

  const getIntershipHistoryByIdUseCase = new GetIntershipHistoryByIdUseCase({
    requestCallback: internshipHistoryRepository.getListById,
  });

  const getSelectionsByIdUseCase = new GetSelectionsByIdUseCase({
    requestCallback: studentsRepository.getSelectionsListById,
  });

  const getPreferencesByIdUseCase = new GetPreferencesListByIdUseCase({
    requestCallback: preferencesRepository.getListById,
  });

  const getDiaresByIdUseCase = new GetDiariesListByIdUseCase({
    requestCallback: studentsRepository.getDiaresListById,
  });

  const viewModel = useMemo(
    () => new ProfilePageViewModel(
      getProfileUseCase,
      getDiariesUseCase,
      getIntershipHistoryUseCase,
      getVacancyListUseCase,
      patchInternshipUseCase,
      createInternshipUseCase,
      getFeedbackUseCase,
      getStudentUseCase,
      getIntershipHistoryByIdUseCase,
      getSelectionsByIdUseCase,
      getPreferencesByIdUseCase,
      getDiaresByIdUseCase,
    ),
    [],
  );

  return (
    <ProfilePageViewModelContext.Provider value={viewModel}>
      <ProfilePageController id={id} />
    </ProfilePageViewModelContext.Provider>
  );
};

export default ProfilePageProvider;
