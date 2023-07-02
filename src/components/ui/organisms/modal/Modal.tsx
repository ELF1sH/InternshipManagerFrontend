import React from 'react';
import { Modal as ModalAnt } from 'antd';
import { observer } from 'mobx-react-lite';

import { CANCEL_BUTTON_ID } from 'components/ui/organisms/modal/constants';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

const Modal: React.FC = () => {
  const {
    onOk, closeModal, isOpened, content, formTitle, style, footer, width,
  } = useModalViewModel();

  return (
    <ModalAnt
      title={formTitle}
      open={isOpened}
      onOk={onOk}
      onCancel={closeModal}
      cancelButtonProps={{ id: CANCEL_BUTTON_ID }}
      footer={footer}
      okText="Ок"
      cancelText="Отмена"
      style={style}
      width={width}
    >
      {content}
    </ModalAnt>
  );
};

export default observer(Modal);
