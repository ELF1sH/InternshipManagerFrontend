import React, { createContext, useContext, useMemo } from 'react';

import { ModalViewModel } from 'components/ui/organisms/modal/ModalViewModel';
import Modal from 'components/ui/organisms/modal/Modal';

import { IChildren } from 'utils/interfaces/IChildren';

export const ModalVmContext = createContext<ModalViewModel>(new ModalViewModel());

export const useModalViewModel = () => useContext(ModalVmContext);

export const ModalProvider: React.FC<IChildren> = ({ children }) => {
  const vm = useMemo(() => new ModalViewModel(), []);

  return (
    <ModalVmContext.Provider value={vm}>
      {children}
      <Modal />
    </ModalVmContext.Provider>
  );
};
