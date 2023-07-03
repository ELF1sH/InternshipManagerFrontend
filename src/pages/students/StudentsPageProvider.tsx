import React, { useMemo } from 'react';

import { GetSelectionsByStudentUseCase } from 'domain/useCases/vacancy/GetSelectionsByStudentUseCase';
import { GetStudentsListUseCase } from 'domain/useCases/students/GetStudentsListUseCase';
import { studentsRepository } from 'domain/repositories/api/StudentsRepository';
import { AddStudentsListUseCase } from 'domain/useCases/students/AddStudentsListUseCase';
import { companyRepository } from 'domain/repositories/api/CompanyRepository';
import { GetCandidateListUseCase } from 'domain/useCases/company/GetCandidateListUseCase';
import { PatchSelectionUseCase } from 'domain/useCases/vacancy/PatchSelectionUseCase';
import { vacancyRepository } from 'domain/repositories/api/VacancyRepository';

import { StudentsPageViewModelContext } from 'pages/students/viewModel/context';
import { StudentsPageViewModel } from 'pages/students/viewModel';
import StudentsPageController from 'pages/students/StudentsPageController';

const StudentsPageProvider: React.FC = () => {
  const getStudentsListUseCase = new GetStudentsListUseCase({
    requestCallback: studentsRepository.getStudents,
  });

  const addStudentsListUseCase = new AddStudentsListUseCase({
    requestCallback: studentsRepository.addStudentsList,
  });

  const getCandidatesListUseCase = new GetCandidateListUseCase({
    requestCallback: companyRepository.getCandidates,
  });

  const patchSelectionUseCase = new PatchSelectionUseCase({
    requestCallback: vacancyRepository.patchSelection,
  });

  const getSelectionsByStudentUseCase = new GetSelectionsByStudentUseCase({
    requestCallback: vacancyRepository.getSelectionsByStudent,
  });

  const studentsPageViewModel = useMemo(
    () => new StudentsPageViewModel(
      getStudentsListUseCase,
      addStudentsListUseCase,
      getCandidatesListUseCase,
      patchSelectionUseCase,
      getSelectionsByStudentUseCase,
    ),
    [],
  );
  return (
    <StudentsPageViewModelContext.Provider value={studentsPageViewModel}>
      <StudentsPageController />
    </StudentsPageViewModelContext.Provider>
  );
};

export default StudentsPageProvider;
