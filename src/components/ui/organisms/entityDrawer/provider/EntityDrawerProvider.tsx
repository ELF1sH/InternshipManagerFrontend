import React, { useMemo } from 'react';

import { EntityDrawerVmContext } from 'components/ui/organisms/entityDrawer/viewModel/context';
import { EntityDrawerViewModel } from 'components/ui/organisms/entityDrawer/viewModel';
import { EntityDrawerStudentViewModel } from 'components/ui/organisms/entityDrawer/entities/student/EntityDrawerStudentViewModel';
import EntityDrawerStudent from 'components/ui/organisms/entityDrawer/entities/student/EntityDrawerStudent';

import { studentsRepository } from 'domain/repositories/api/StudentsRepository';
import { GetStudentUseCase } from 'domain/useCases/students/GetStudentUseCase';

import { IChildren } from 'utils/interfaces/IChildren';

const EntityDrawerProvider: React.FC<IChildren> = ({ children }) => {
  const getStudent = new GetStudentUseCase({
    requestCallback: studentsRepository.getStudent,
  });

  const studentViewModel = new EntityDrawerStudentViewModel(getStudent);

  const vm = useMemo<EntityDrawerViewModel>(
    () => new EntityDrawerViewModel(studentViewModel),
    [],
  );

  return (
    <EntityDrawerVmContext.Provider value={vm}>
      {children}
      <EntityDrawerStudent />
    </EntityDrawerVmContext.Provider>
  );
};

export default EntityDrawerProvider;
