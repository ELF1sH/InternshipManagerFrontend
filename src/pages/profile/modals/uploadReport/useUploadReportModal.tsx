import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';
import UploadReportModalContent from 'pages/profile/modals/uploadReport/content';

export const useUploadReportModal = () => {
  const { openModal } = useModalViewModel();

  const { initRequests } = useProfilePageViewModel();

  const handleOpenModal = () => {
    openModal({
      formTitle: 'Сдать дневник практики',
      content: <UploadReportModalContent />,
      cbOnComplete: () => initRequests(),
    });
  };

  return { handleOpenModal };
};
