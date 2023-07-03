import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { StudentsPageViewModel } from 'pages/students/viewModel';
import ImportStudentsViaCVSModal from 'pages/students/modals/importStudentsViaCSV/content';

export const useImportStudentsViaCSVModal = (addStudentsList: StudentsPageViewModel['addStudentsList']) => {
  const { openModal } = useModalViewModel();

  const openImportStudentsViaCSVModal = () => {
    openModal({
      formTitle: 'Массовый импорт студентов',
      content: <ImportStudentsViaCVSModal addStudents={addStudentsList} />,
      width: '800px',
      footer: false,
    });
  };

  return { openImportStudentsViaCSVModal };
};
