import React from 'react';
import { observer } from 'mobx-react-lite';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Button from 'components/ui/atoms/button/Button';
import VacanciesList from 'components/ui/organisms/vacanciesList/VacanciesList';

import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';
import DnDWrapper from 'pages/preferences/components/dndWrapper/DnDWrapper';

const PreferencesPageView: React.FC = () => {
  const { wasEdited } = usePreferencesPageViewModel();
  const { openModal } = useModalViewModel();

  return (
    <>
      <PageHeader
        header=" Список предпочтений"
        editable
        wasEdited={wasEdited}
      >
        <Button
          type="text"
          icon={<PlusIcon size={24} />}
          onClick={() => openModal(
            {
              formTitle: 'Добавление вакансии в список предпочтений',
              content: <VacanciesList companiesWithVacancies={[]} />,
              style: { minWidth: '1000px' },
            },
          )}
        >
          Добавить
        </Button>
      </PageHeader>
      <DnDWrapper />
    </>
  );
};

export default observer(PreferencesPageView);
