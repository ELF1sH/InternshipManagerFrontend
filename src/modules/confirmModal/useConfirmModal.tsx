import React, { useContext } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { ModalConfirmContext } from 'modules/confirmModal/ModalConfirmProvider';

interface UseConfirmProps {
  title: string;
  cbOnOk: Function;
  content?: string;
}

export const useConfirmModal = ({ title, cbOnOk, content }: UseConfirmProps) => {
  const api = useContext(ModalConfirmContext);

  const showConfirm = () => {
    api?.confirm({
      title,
      icon: <ExclamationCircleFilled />,
      ...(content ? { content } : null),
      onOk() {
        cbOnOk();
      },
    });
  };

  return {
    showConfirm,
  };
};
