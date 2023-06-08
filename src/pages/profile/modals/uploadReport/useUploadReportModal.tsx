import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import UploadReportModalContent from 'pages/profile/modals/content';

export const useUploadReportModal = () => {
  const { openModal } = useModalViewModel();

  const handleOpenModal = () => {
    openModal({
      formTitle: 'Сдать дневник практики',
      content: <UploadReportModalContent />,
      cbOnComplete: () => console.log('turned in'),
    });
  };

  return { handleOpenModal };
};
