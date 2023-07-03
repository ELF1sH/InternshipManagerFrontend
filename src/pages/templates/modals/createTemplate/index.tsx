import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import CreateTemplateModal from 'pages/templates/modals/createTemplate/content/CreateTemplateModal';

export const useCreateTemplateModal = () => {
  const { openModal } = useModalViewModel();

  const openCreateTemplateModal = () => {
    openModal({
      formTitle: 'Редактирование шаблона',
      content: <CreateTemplateModal />,
      footer: false,
    });
  };

  return { openCreateTemplateModal };
};
