import React, { useMemo } from 'react';

import { GetStudentsListUseCase } from 'domain/useCases/students/GetStudentsListUseCase';
import { studentsRepository } from 'domain/repositories/api/StudentsRepository';
import { AddStudentsListUseCase } from 'domain/useCases/students/AddStudentsListUseCase';

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

  const studentsPageViewModel = useMemo(
    () => new StudentsPageViewModel(
      getStudentsListUseCase,
      addStudentsListUseCase,
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
