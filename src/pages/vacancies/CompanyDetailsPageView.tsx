import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Company, { CompanyProps } from 'components/ui/molecules/company/Company';
import Vacancy from 'components/ui/molecules/vacancy/Vacancy';
import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { IVacancy } from 'domain/entities/vacancy';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';

import { userStore } from 'storesMobx/stores/UserStore';

// interface ICompanyPage{
//   name: string;
//   minQuantity: number;
//   maxQuantity: number;
//   vacancies: IVacancy[];
// }
const CompanyDetailsPageView: React.FC = () => {
  const {
    companiesWithVacancies,
    filtredCompanies: filtredCompaniesPromise,
    addNewVacancy,
    deleteVacancy,
    editVacancy,
  } = useVacanciesPageViewModel();

  const { openModal, closeModal } = useModalViewModel();

  const currentRole = userStore.role;

  const [filtredCompanies, setFiltredCompanies] = useState<
  CompanyWithVacancies[]
  >(companiesWithVacancies);

  useEffect(() => {
    filtredCompaniesPromise.then((val) => {
      setFiltredCompanies(val);
    });
  }, [filtredCompaniesPromise]);

  if (currentRole === UserRole.UNIVERSITY_DEPARTMENT) {
    return (
      <>
        <PageHeader header="Компания" />
        <Space direction="vertical" gap={20}>
          <div>dekan</div>
        </Space>
      </>
    );
  }
  if (currentRole === UserRole.COMPANY) {
    return (
      <>
        <PageHeader header="Компания" />

        <Space direction="vertical" gap={20}>
          <div>company</div>
        </Space>
      </>
    );
  }
  return (
    <>
      <PageHeader header="Компания" />

      <Space direction="vertical" gap={20}>
        <div>default</div>
      </Space>
    </>
  );
};

export default observer(CompanyDetailsPageView);
