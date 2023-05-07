import React from 'react';
import { Modal as ModalAnt, Steps } from 'antd';
import { observer } from 'mobx-react-lite';

import { CANCEL_BUTTON_ID } from 'components/ui/organisms/modal/constants';
import { useModalVmContext } from 'components/ui/organisms/modal/context/ModalProvider';

const Modal: React.FC = () => {
  const {
    closeModal, isOpened, content, formTitle, stepProps, currentStep,
    isLastStep, isFirstStep, switchToNextStep, switchToPreviousStep,
    isNextBtnDisabled, isPreviousBtnDisabled,
    cbOnComplete,
  } = useModalVmContext();

  const okText = isLastStep ? 'Принять' : 'Далее';
  const cancelText = isFirstStep ? 'Отмена' : 'Назад';

  const onOk = () => {
    if (isLastStep) {
      closeModal();
      cbOnComplete?.();
    } else switchToNextStep();
  };

  const onCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (e.currentTarget.id !== CANCEL_BUTTON_ID) {
      closeModal();

      return;
    }

    if (isFirstStep) closeModal();
    else switchToPreviousStep();
  };

  return (
    <ModalAnt
      title={formTitle}
      open={isOpened}
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{ disabled: isNextBtnDisabled }}
      cancelButtonProps={{ id: CANCEL_BUTTON_ID, disabled: isPreviousBtnDisabled }}
      okText={okText}
      cancelText={cancelText}
    >
      {
        stepProps.length > 1 && (
          <Steps items={stepProps} labelPlacement="vertical" current={currentStep} />
        )
      }
      {content}
    </ModalAnt>
  );
};

export default observer(Modal);
