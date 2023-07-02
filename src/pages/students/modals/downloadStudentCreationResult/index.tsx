import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import DownloadStudentCreationResultModal from 'pages/students/modals/downloadStudentCreationResult/content';

export const useDownloadStudentCreationResult = () => {
  const { openModal } = useModalViewModel();

  const openDownloadStudentCreationResult = (value: string) => {
    openModal({
      formTitle: 'Добавление студентов: выгрузка результатов',
      content: <DownloadStudentCreationResultModal stringValue={value} />,
      footer: false,
      width: '1200px',
    });
  };

  return { openDownloadStudentCreationResult };
};
