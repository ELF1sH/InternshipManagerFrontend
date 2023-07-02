import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import ImportStudentsViaCVSModal from 'pages/students/modals/importStudentsViaCSV/content';

export const useImportStudentsViaCSVModal = () => {
  const { openModal } = useModalViewModel();

  const openImportStudentsViaCSVModal = () => {
    openModal({
      formTitle: 'Массовый импорт студентов',
      content: <ImportStudentsViaCVSModal />,
      width: '800px',
      footer: false,
    });
  };

  return { openImportStudentsViaCSVModal };
};
