import React from 'react';
import { Modal } from 'antd';
import { ModalStaticFunctions } from 'antd/es/modal/confirm';

interface ModalConfirmProviderProps {
  children: React.ReactNode;
}

export const ModalConfirmContext = React.createContext<Omit<ModalStaticFunctions, 'warn'> | undefined>(undefined);

const ModalConfirmProvider: React.FC<ModalConfirmProviderProps> = ({
  children,
}) => {
  const [api, contextHolder] = Modal.useModal();

  return (
    <ModalConfirmContext.Provider value={api}>
      {contextHolder}
      {children}
    </ModalConfirmContext.Provider>
  );
};

export default ModalConfirmProvider;
