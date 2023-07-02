import React from 'react';
import { Tooltip } from 'antd';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';

import { ISelection, SelectionStatus } from 'domain/entities/selection';

interface OfferButtonProps {
  isSelected?: ISelection;
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

const getTooltipTitle = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.GOT_OFFER:
      return 'Вы получили оффер';
    case SelectionStatus.LOST_OFFER:
      return 'Вы получили отказ';
    default:
      return '';
  }
};

const OfferButton: React.FC<OfferButtonProps> = ({ isSelected }) => (
  <Tooltip placement="left" title={getTooltipTitle(isSelected?.status)}>
    <IconButton
      size="large"
      icon={<OfferIcon />}
      style={{
        color: getColor(isSelected?.status),
      }}
    />
  </Tooltip>

);

export default OfferButton;
