import React from 'react';

import AcceptOfferButton from 'components/ui/molecules/vacancy/components/actions/components/AcceptOfferButton';
import OfferButton from 'components/ui/molecules/vacancy/components/actions/components/OfferButton';
import InterviewButton from 'components/ui/molecules/vacancy/components/actions/components/InterviewButton';
import Space from 'components/ui/atoms/space/Space';
import AddToPreferenceButton from 'components/ui/molecules/vacancy/components/actions/components/AddToPreferenceButton';

import { IPreferenceItem } from 'domain/entities/preferences';
import { ISelection } from 'domain/entities/selection';

interface ActionsProps {
  id: number
  isSelected?: ISelection;
  isPreferenced?: IPreferenceItem;
}

const Actions: React.FC<ActionsProps> = ({
  id, isSelected, isPreferenced,
}) => (
  <Space justifyContent="end" alignItems="center" style={{ width: 'fit-content' }}>
    <AddToPreferenceButton id={id} isPreferenced={isPreferenced} />
    <InterviewButton id={id} isSelected={isSelected} />
    <OfferButton isSelected={isSelected} />
    <AcceptOfferButton id={id} isSelected={isSelected} />
  </Space>
);

export default Actions;
