import React from 'react';
import { Tooltip } from 'antd';

import { offerConfirmationContent, offerConfirmationTitle } from 'components/ui/molecules/vacancy/components/actions/constants';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

import { ISelection, SelectionStatus } from 'domain/entities/selection';

import { useConfirmModal } from 'modules/confirmModal/useConfirmModal';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';

interface AcceptOfferButtonProps {
  id: number;
  isSelected?: ISelection;
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

const getTitle = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'Вы приняли оффер';
    case SelectionStatus.REJECTED_OFFER:
      return 'Вы отказались от оффера';
    default:
      return '';
  }
};

const AcceptOfferButton: React.FC<AcceptOfferButtonProps> = ({ id, isSelected }) => {
  const { patchSelection } = useVacanciesPageViewModel();

  const { showConfirm } = useConfirmModal({
    title: offerConfirmationTitle,
    content: offerConfirmationContent,
    cbOnOk: () => patchSelection?.(id, SelectionStatus.ACCEPTED_OFFER),
    cbOnCancel: () => patchSelection?.(id, SelectionStatus.REJECTED_OFFER),
    okText: 'Принять оффер',
    cancelText: 'Отклонить оффер',
  });

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
    <Tooltip placement="left" title={getTitle(isSelected?.status)}>
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
