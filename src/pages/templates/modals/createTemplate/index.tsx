import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { IPostDiaryTemplatePayload } from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';

import CreateTemplateModal, {
  ITemplateFormState,
} from 'pages/templates/modals/createTemplate/content/CreateTemplateModal';

export const useCreateTemplateModal = (
  onCreate: (payload: IPostDiaryTemplatePayload) => void,
) => {
  const { openModal } = useModalViewModel();

  const openCreateTemplateModal = (formState?: ITemplateFormState) => {
    openModal({
      formTitle: formState ? 'Редактирование шаблона' : 'Создание шаблона',
      content: <CreateTemplateModal onCreate={onCreate} formState={formState} />,
      footer: false,
    });
  };

  return { openCreateTemplateModal };
};
