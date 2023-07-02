import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { SelectionStatus } from 'domain/entities/selection';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';

interface UseSendStudentVerdictModalReturnType {
  openSendStudentVerdictModal: (selectionId: number) => void;
}

export const useSendStudentVerdictModal = (): UseSendStudentVerdictModalReturnType => {
  const { openModal, closeModal } = useModalViewModel();

  const { patchSelection } = useStudentsPageViewModel();

  const openSendStudentVerdictModal = (selectionId: number) => {
    openModal({
      formTitle: 'Отправить студенту вердикт',
      content: (
        <Space direction="vertical" gap={20}>
          Вы можете отправить студенту оффер или отказ.
          Студент увидит ваше решение.
          Если вы отправите оффер, у студента появится
          возможность принять/отклонить его.
          <Space direction="horizontal" justifyContent="space-between">
            <Button
              onClick={() => {
                patchSelection(selectionId, SelectionStatus.LOST_OFFER)
                  .then(closeModal);
              }}
            >
              Отправить отказ
            </Button>

            <Button
              type="primary"
              onClick={() => {
                patchSelection(selectionId, SelectionStatus.GOT_OFFER).then(closeModal);
              }}
            >
              Отправить оффер
            </Button>
          </Space>
        </Space>),
      footer: false,
    });
  };

  return { openSendStudentVerdictModal };
};
