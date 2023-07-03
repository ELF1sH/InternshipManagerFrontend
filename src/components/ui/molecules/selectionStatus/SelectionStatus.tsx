import React from 'react';

import InterviewIcon from 'components/ui/atoms/icons/InterviewIcon';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';

import { SelectionStatus } from 'domain/entities/selection';

import { getInterviewColor, getOfferStatusColor, getVerdictStatusColor } from 'utils/colors/selectionStatusColors';

interface SelectionStatusProps {
  status: SelectionStatus;
}

const SelectionStatusInfo: React.FC<SelectionStatusProps> = ({ status }) => (
  <>
    <InterviewIcon style={{ transform: 'scale(0.8)', color: getInterviewColor(status) }} />
    <OfferIcon style={{ color: getVerdictStatusColor(status) }} />
    <AcceptedOffer style={{ color: getOfferStatusColor(status) }} />
  </>
);

export default SelectionStatusInfo;
