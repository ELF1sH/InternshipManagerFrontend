import React from 'react';
import { Tooltip } from 'antd';

import {
  interviewConfirmationContent,
  interviewConfirmationTitle,
} from 'components/ui/molecules/vacancy/components/actions/constants';
import InterviewIcon from 'components/ui/atoms/icons/InterviewIcon';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

import { ISelection } from 'domain/entities/selection';

import { useConfirmModal } from 'modules/confirmModal/useConfirmModal';
import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface InterviewButtonProps {
  id: number;
  isSelected?: ISelection;
  addToSelections?: (payload: number) => Promise<void>
}

const InterviewButton: React.FC<InterviewButtonProps> = ({
  id,
  isSelected,
  addToSelections,
}) => {
  const { showConfirm } = useConfirmModal({
    title: interviewConfirmationTitle,
    content: interviewConfirmationContent,
    cbOnOk: () => addToSelections?.(id),
  });
  const { role } = useStore().userStore;

  if (!isSelected) {
    return (
      <Tooltip title="Сообщить о прохождении всех испытаний" placement="left">
        <IconButton
          size="large"
          icon={(<InterviewIcon style={{ transform: 'scale(0.8)' }} />)}
          disabled={!!isSelected}
          onClick={showConfirm}
        />
      </Tooltip>
    );
  }

  return (
    <Tooltip title={role === UserRole.STUDENT ? 'Вы прошли этап испытаний' : 'Студент прошёл этап испытаний'} placement="left">
      <IconButton
        size="large"
        icon={(<InterviewIcon style={{ transform: 'scale(0.8)', color: 'green' }} />)}
        style={{ opacity: 0.5 }}
      />
    </Tooltip>
  );
};

export default InterviewButton;
