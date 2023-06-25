import React, { useContext } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { ModalConfirmContext } from 'modules/confirmModal/ModalConfirmProvider';

interface UseConfirmProps {
  title: string;
  cbOnOk: Function;
  cbOnCancel?: Function;
  content?: string;
  okText?: string;
  cancelText?: string;
}

export const useConfirmModal = ({
  title, cbOnOk, cbOnCancel, content, okText, cancelText,
}: UseConfirmProps) => {
  const api = useContext(ModalConfirmContext);

  const showConfirm = () => {
    api?.confirm({
      title,
      icon: <ExclamationCircleFilled />,
      ...(content ? { content } : null),
      onOk() {
        cbOnOk();
      },
      onCancel(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // @ts-ignore
        e?.();

        if (e.toString() !== '() => {}') {
          cbOnCancel?.();
        }
      },
      keyboard: false,
      cancelButtonProps: { id: 'cancelButton' },
      okText,
      cancelText,
      maskClosable: true,
    });
  };

  return {
    showConfirm,
  };
};
