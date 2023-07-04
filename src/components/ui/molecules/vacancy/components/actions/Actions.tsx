import React from 'react';

import AcceptOfferButton from 'components/ui/molecules/vacancy/components/actions/components/AcceptOfferButton';
import OfferButton from 'components/ui/molecules/vacancy/components/actions/components/OfferButton';
import InterviewButton from 'components/ui/molecules/vacancy/components/actions/components/InterviewButton';
import Space from 'components/ui/atoms/space/Space';
import AddToPreferenceButton from 'components/ui/molecules/vacancy/components/actions/components/AddToPreferenceButton';

import { IPreferenceItem } from 'domain/entities/preferences';
import { ISelection, SelectionStatus } from 'domain/entities/selection';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface ActionsProps {
  id: number
  isSelected?: ISelection;
  isPreferenced?: IPreferenceItem;
  patchSelection?: (id: number, status: SelectionStatus) => Promise<void>
  postPreference?: (id: number) => Promise<void>
  addToSelections?: (payload: number) => Promise<void>
}

const Actions: React.FC<ActionsProps> = ({
  id,
  isSelected,
  isPreferenced,
  patchSelection,
  postPreference,
  addToSelections,
}) => {
  const { role } = useStore().userStore;

  return (
    <Space justifyContent="end" alignItems="center" style={{ width: 'fit-content' }}>
      {
        role === UserRole.STUDENT && (
        <AddToPreferenceButton
          id={id}
          isPreferenced={isPreferenced}
          postPreference={postPreference}
        />
        )
      }

      <InterviewButton id={id} isSelected={isSelected} addToSelections={addToSelections} />
      <OfferButton isSelected={isSelected} />
      <AcceptOfferButton id={id} isSelected={isSelected} patchSelection={patchSelection} />
    </Space>
  );
};

export default Actions;
