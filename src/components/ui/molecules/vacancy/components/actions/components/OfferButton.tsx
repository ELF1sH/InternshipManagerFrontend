import React from 'react';
import { Tooltip } from 'antd';
import { ButtonType } from 'antd/es/button';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';

import { ISelection, SelectionStatus } from 'domain/entities/selection';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface OfferButtonProps {
  isSelected?: ISelection;
  onClick?: () => void;
  type?: ButtonType;
}

const getColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.GOT_OFFER:
    case SelectionStatus.ACCEPTED_OFFER:
    case SelectionStatus.REJECTED_OFFER:
      return 'green';
    case SelectionStatus.LOST_OFFER:
      return 'red';
    default:
      return 'black';
  }
};

const getTooltipTitle = (userRole: UserRole, status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.GOT_OFFER:
      return userRole === UserRole.STUDENT ? 'Вы получили оффер' : 'Студент получил оффер';
    case SelectionStatus.LOST_OFFER:
      return userRole === UserRole.STUDENT ? 'Вы получили отказ' : 'Студент получил отказ';
    default:
      return '';
  }
};

const OfferButton: React.FC<OfferButtonProps> = ({ isSelected, onClick, type }) => {
  const { role } = useStore().userStore;

  if (onClick) {
    return (
      <IconButton
        size="large"
        icon={<OfferIcon />}
        onClick={onClick}
        type={type}
      />
    );
  }

  return (
    <Tooltip placement="left" title={getTooltipTitle(role, isSelected?.status)}>
      <IconButton
        size="large"
        icon={<OfferIcon />}
        style={{
          color: getColor(isSelected?.status),
        }}
      />
    </Tooltip>

  );
};

export default OfferButton;
