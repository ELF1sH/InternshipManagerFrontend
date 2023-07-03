import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { IAddStudentResponse } from 'domain/repositories/api/interfaces/IStudentsRepository';

import DownloadStudentCreationResultModal from 'pages/students/modals/downloadStudentCreationResult/content';

export const useDownloadStudentCreationResult = () => {
  const { openModal } = useModalViewModel();

  const openDownloadStudentCreationResult = (result: IAddStudentResponse[]) => {
    openModal({
      formTitle: 'Добавление студентов: выгрузка результатов',
      content: <DownloadStudentCreationResultModal studentsResult={result} />,
      footer: false,
      width: '1200px',
    });
  };

  return { openDownloadStudentCreationResult };
};
