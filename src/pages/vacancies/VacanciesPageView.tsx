import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import VacanciesList from 'components/ui/organisms/vacanciesList/VacanciesList';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Button from 'components/ui/atoms/button/Button';

import { UserRole } from 'modules/authority/enums/UserRole';

import { CompanyVacancy } from 'pages/vacancies/components/companyVacancy/CompanyVacancy';
import { NewVacancyModal } from 'pages/vacancies/components/newVacancyModal/NewVacancyModal';
import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';
import FilterForm from 'pages/vacancies/components/filterForm/FilterForm';

import { userStore } from 'storesMobx/stores/UserStore';

const VacanciesPageView: React.FC = () => {
  const { companiesWithVacancies } = useVacanciesPageViewModel();
  const { openModal } = useModalViewModel();

  const viewModel = useVacanciesPageViewModel();
  const currentRole = userStore.profile.role;

  if (currentRole === UserRole.COMPANY) {
    return (
      <>
        <PageHeader header="Вакансии">

          <Button
            type="text"
            icon={<PlusIcon size={24} />}
            onClick={() => openModal({
              formTitle: 'Создание новой вакансии',
              content: <NewVacancyModal addOrEditVacancy={viewModel.addNewWacancy} />,
              footer: false,
            })}
          >
            Добавить

          </Button>

        </PageHeader>

        <Space direction="vertical" gap={20}>
          {
          companiesWithVacancies.filter((val) => val.name === userStore.profile.username)
            .map((val, idx) => (
              <CompanyVacancy
                key={idx}
                name={val.name}
                stacks={[
                  {
                    techStack: 'React', minimumQuality: 1, maximumQuality: 2, id: 1,
                  },
                ]}
                onEditHandler={(val) => {
                  openModal({
                    formTitle: 'Редактирование компании',
                    content: <NewVacancyModal
                      addOrEditVacancy={() => {}}
                      defaultValues={{
                        ...val,
                        name: 'Frontend',
                      }}
                    />,
                    footer: false,
                  });
                }}
              />
            ))
            }
        </Space>

      </>
    );
  }
  if (currentRole === UserRole.UNIVERSITY_DEPARTMENT) {
    return (
      <>
        <PageHeader header="Компании и стажировки" />
        <Space direction="vertical" gap={20}>
          <FilterForm />
          <VacanciesList companiesWithVacancies={companiesWithVacancies} />
        </Space>
      </>
    );
  }

  return (
    <>
      <PageHeader header="Вакансии" />

      <Space direction="vertical" gap={20}>

        <FilterForm />
        <VacanciesList companiesWithVacancies={companiesWithVacancies} />

      </Space>
    </>
  );
};

export default VacanciesPageView;
