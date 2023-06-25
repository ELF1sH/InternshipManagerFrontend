import React from 'react';
import { observer } from 'mobx-react-lite';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';

import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';
import DnDWrapper from 'pages/preferences/components/dndWrapper/DnDWrapper';

const PreferencesPageView: React.FC = () => {
  const { wasEdited, onSaveChanges } = usePreferencesPageViewModel();

  return (
    <>
      <PageHeader
        header=" Список предпочтений"
        editable
        wasEdited={wasEdited}
        onSaveChanges={onSaveChanges}
      />
      <DnDWrapper />
    </>
  );
};

export default observer(PreferencesPageView);
