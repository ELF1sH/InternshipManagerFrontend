import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import VacanciesList, { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';
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
  const {
    companiesWithVacancies,
    addNewWacancy,
    deleteVacancy,
    editVacancy,
    vacancySearchString,
    companySearchString,
  } = useVacanciesPageViewModel();

  const { openModal, closeModal } = useModalViewModel();

  const currentRole = userStore.role;
  const [filtredCompanies, setFiltredCompanies] = useState<
  CompanyWithVacancies[]
  >(companiesWithVacancies);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setFiltredCompanies(filtredCompanies);
    }, 400);

    let filtredCompanies = companiesWithVacancies
      .filter((val) => val.name.toLowerCase().trim().includes(companySearchString));

    filtredCompanies = filtredCompanies.map((val) => ({
      ...val,
      vacancies: val.vacancies.filter((vac) => vac.name.toLowerCase()
        .trim().includes(vacancySearchString)),
    }));
    return (() => clearTimeout(timeOut));
  }, [vacancySearchString, companySearchString]);

  if (currentRole === UserRole.COMPANY) {
    return (
      <>
        <PageHeader header="Вакансии">
          <Button
            type="text"
            icon={<PlusIcon size={24} />}
            onClick={() => openModal({
              formTitle: 'Создание новой вакансии',
              content: <NewVacancyModal
                addOrEditVacancy={addNewWacancy}
                buttonText="Создать"
                closeModal={closeModal}
              />,
              footer: false,
            })}
          >
            Добавить
          </Button>
        </PageHeader>

        <Space direction="vertical" gap={20}>
          {
          companiesWithVacancies[0].vacancies
            .map((val, idx) => (
              <CompanyVacancy
                key={idx}
                name={val.name}
                stacks={val.vacancies}
                deleteVacancy={deleteVacancy}
                onEditHandler={(val) => {
                  openModal({
                    formTitle: 'Редактирование компании',
                    content: <NewVacancyModal
                      addOrEditVacancy={editVacancy}
                      defaultValues={val}
                      buttonText="Сохранить изменения"
                      closeModal={closeModal}
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
          <VacanciesList companiesWithVacancies={filtredCompanies} />
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

export default observer(VacanciesPageView);
