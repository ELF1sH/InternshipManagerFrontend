import React from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';
import DragIcon from 'components/ui/atoms/icons/DragIcon';
import Text from 'components/ui/atoms/text/Text';
import Space from 'components/ui/atoms/space/Space';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

import { IPreferenceItem } from 'domain/entities/preferences';

import { useConfirmModal } from 'modules/confirmModal/useConfirmModal';

import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';

interface PreferenceProps {
  preference: IPreferenceItem;
  draggableProps?: DraggableProvidedDragHandleProps | null;
}

const Preference: React.FC<PreferenceProps> = ({
  preference,
  draggableProps,
}) => {
  const { deletePreference } = usePreferencesPageViewModel();

  const { showConfirm } = useConfirmModal({
    title: 'Вы уверены, что хотите убрать эту вакансию из списка предпочтений?',
    cbOnOk: () => deletePreference(preference.id),
  });

  return (
    <Space alignItems="center" gap={10}>
      <Text>
        {preference.orderNumber + 1}
        .
        &nbsp;
        {preference.vacancy.company.name}
        :
        &nbsp;
        {preference.vacancy.name}
        &nbsp;
        (
        {preference.vacancy.techStack}
        )
      </Text>
      <IconButton icon={<DragIcon />} {...draggableProps} />
      <IconButton icon={<DeleteIcon />} onClick={showConfirm} />
    </Space>
  );
};

export default Preference;
