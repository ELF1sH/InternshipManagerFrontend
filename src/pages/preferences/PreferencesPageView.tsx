import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';
import DnDWrapper from 'pages/preferences/components/dndWrapper/DnDWrapper';
import VacanciesPageProvider from 'pages/vacancies/VacanciesPageProvider';

const PreferencesPageView: React.FC = () => {
  const { wasEdited } = usePreferencesPageViewModel();
  const { openModal } = useModalViewModel();

  return (
    <>
      <PageHeader
        header={(
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            Список предпочтений
            <Button
              type="text"
              icon={<PlusIcon size={24} />}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
              onClick={() => openModal(
                {
                  formTitle: 'Добавление вакансии в список предпочтений',
                  content: <VacanciesPageProvider />,
                  style: { minWidth: '1000px' },
                },
              )}
            >
              Добавить

            </Button>
          </div>
)}
        editable
        wasEdited={wasEdited}
      />
      <DnDWrapper />
    </>
  );
};

export default observer(PreferencesPageView);
