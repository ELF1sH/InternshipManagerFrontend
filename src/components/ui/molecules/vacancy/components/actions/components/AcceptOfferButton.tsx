import React from 'react';
import { Tooltip } from 'antd';
import { ButtonType } from 'antd/es/button';

import { offerConfirmationContent, offerConfirmationTitle } from 'components/ui/molecules/vacancy/components/actions/constants';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

import { ISelection, SelectionStatus } from 'domain/entities/selection';

import { useConfirmModal } from 'modules/confirmModal/useConfirmModal';
import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface AcceptOfferButtonProps {
  id: number;
  isSelected?: ISelection;
  patchSelection?: (id: number, status: SelectionStatus) => Promise<void>
  ok?: boolean;
  onClick?: () => void;
  type?: ButtonType;
}

const getColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'green';
    case SelectionStatus.REJECTED_OFFER:
      return 'red';
    default:
      return '';
  }
};

const getTitle = (role: UserRole, status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return role === UserRole.STUDENT ? 'Вы приняли оффер' : 'Студент принял оффер';
    case SelectionStatus.REJECTED_OFFER:
      return role === UserRole.STUDENT ? 'Вы отказались от оффера' : 'Студент отказался от оффера';
    default:
      return '';
  }
};

const AcceptOfferButton: React.FC<AcceptOfferButtonProps> = ({
  id,
  isSelected,
  patchSelection,
  ok,
  onClick,
  type,
}) => {
  const { role } = useStore().userStore;

  const { showConfirm } = useConfirmModal({
    title: offerConfirmationTitle,
    content: offerConfirmationContent,
    cbOnOk: () => {
      if (isSelected?.id) {
        patchSelection?.(isSelected.id, SelectionStatus.ACCEPTED_OFFER);
      }
    },
    cbOnCancel: () => {
      if (isSelected?.id) {
        patchSelection?.(isSelected.id, SelectionStatus.REJECTED_OFFER);
      }
    },
    okText: 'Принять оффер',
    cancelText: 'Отклонить оффер',
  });

  if (onClick) {
    return (
      <IconButton
        size="large"
        icon={<AcceptedOffer />}
        onClick={onClick}
        type={type}
      />
    );
  }

  if (isSelected?.status === SelectionStatus.GOT_OFFER) {
    return (
      <IconButton
        size="large"
        icon={<AcceptedOffer />}
        onClick={showConfirm}
      />
    );
  }

  return (
    <Tooltip placement="left" title={getTitle(role, isSelected?.status)}>
      <IconButton
        size="large"
        icon={<AcceptedOffer />}
        style={{
          opacity: '0.5',
          color: getColor(isSelected?.status),
        }}
      />
    </Tooltip>
  );
};

export default AcceptOfferButton;
