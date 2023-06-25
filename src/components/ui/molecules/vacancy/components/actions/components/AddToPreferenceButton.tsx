import React from 'react';
import { CheckCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

import { IPreferenceItem } from 'domain/entities/preferences';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';

interface AddToPreferenceButtonProps {
  id: number;
  isPreferenced?: IPreferenceItem;
}

const AddToPreferenceButton: React.FC<AddToPreferenceButtonProps> = ({
  id, isPreferenced,
}) => {
  const { postPreference } = useVacanciesPageViewModel();

  if (isPreferenced) {
    return <CheckCircleOutlined style={{ fontSize: '20px', color: 'green', marginRight: '30px' }} />;
  }

  return (
    <Tooltip title="Добавить в список предпочтений" placement="left">
      <IconButton
        size="large"
        icon={<PlusCircleOutlined />}
        style={{ marginRight: '20px' }}
        onClick={() => postPreference(id)}
      />
    </Tooltip>
  );
};

export default AddToPreferenceButton;
