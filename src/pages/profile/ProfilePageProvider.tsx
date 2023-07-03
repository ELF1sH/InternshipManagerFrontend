import React, { useMemo } from 'react';

import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { profilesRepository } from 'domain/repositories/api/interfaces/ProfilesRepository';
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
