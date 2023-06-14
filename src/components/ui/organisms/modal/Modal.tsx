import React from 'react';
import { Modal as ModalAnt } from 'antd';
import { observer } from 'mobx-react-lite';

import { CANCEL_BUTTON_ID } from 'components/ui/organisms/modal/constants';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

const Modal: React.FC = () => {
  const {
    onOk, closeModal, isOpened, content, formTitle, style,
  } = useModalViewModel();

  return (
    <ModalAnt
      title={formTitle}
      open={isOpened}
      onOk={onOk}
      onCancel={closeModal}
      cancelButtonProps={{ id: CANCEL_BUTTON_ID }}
      okText="Ок"
      cancelText="Отмена"
      style={style}
    >
      {content}
    </ModalAnt>
  );
};

export default observer(Modal);
