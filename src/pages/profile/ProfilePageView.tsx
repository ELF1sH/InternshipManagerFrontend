import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
  Modal,
} from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import Company from 'components/ui/molecules/company/Company';
import VacanciesList, { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { UserRole } from 'modules/authority/enums/UserRole';

import { NewInternshipModalCreate } from 'pages/profile/modals/NewInternshipModalCreate/NewInternshipModalCreate';
import { NewInternshipModal } from 'pages/profile/modals/NewInternshipModal/NewInternshipModal';
import { useProfilePageViewModel } from 'pages/profile/viewModel/context';
import { useUploadReportModal } from 'pages/profile/modals/uploadReport/useUploadReportModal';
import ReportTemplates from 'pages/profile/components/reportTemplates/ReportTemplates';
import ProfileHeader from 'pages/profile/components/profileHeader/ProfileHeader';

import { useStore } from 'storesMobx/MobxStoreProvider';

const ProfilePageView: React.FC = () => {
  const { handleOpenModal } = useUploadReportModal();
  const { internshipHistory } = useProfilePageViewModel();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenCreate, setIsModalOpenCreate] = useState(false);
  const {
    filtredCompanies: filtredCompaniesPromise,
    companiesWithVacancies,
    patchinternshipByVacancy,
    companiesWithVacanciesSelectedOrPreferenced,
  } = useProfilePageViewModel();

  const [filtredCompanies, setFiltredCompanies] = useState<
    CompanyWithVacancies[]
    >(companiesWithVacancies);

  useEffect(() => {
    filtredCompaniesPromise.then((val) => {
      setFiltredCompanies(val);
    });
  }, [filtredCompaniesPromise]);

  const { role } = useStore().userStore;
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        width={600}
        title="Добавить новое место стажировки"
        footer={null}
      >
        <NewInternshipModal
          filtredCompanies={filtredCompanies}
          patchinternshipByVacancy={patchinternshipByVacancy}
          setIsModalOpenCreate={setIsModalOpenCreate}
          setIsModalOpen={setIsModalOpen}
        />
      </Modal>

      <Modal
        open={isModalOpenCreate}
        onCancel={() => setIsModalOpenCreate(false)}
        width={600}
        title="Добавить новое место стажировки"
        footer={null}
      >
        <NewInternshipModalCreate setIsModalOpenCreate={setIsModalOpenCreate} />
      </Modal>

      <ProfileHeader />
      <Space direction="vertical" gap={25}>
        {
          internshipHistory.map(({
            company, id, startDate, semester,
          }) => (

            <Company
              key={id}
              name={company.name}
              beginningDate={`${startDate}, семестер ${semester} `}
              imageUrl={company.imageUrl}
            />
          ))
        }
        <Space gap={16}>
          <Button type="primary" onClick={() => { setIsModalOpen(true); }}>
            Добавить новое место стажировки
          </Button>
          {
            role === UserRole.STUDENT
            && (
            <Button type="primary" onClick={handleOpenModal}>
              Сдать дневник практики
            </Button>
            )
          }

        </Space>

        {
          role === UserRole.UNIVERSITY_DEPARTMENT && (
          <VacanciesList
            companiesWithVacancies={companiesWithVacanciesSelectedOrPreferenced}
            showActions
          />
          )
        }
        <ReportTemplates />
      </Space>
    </>
  );
};

export default observer(ProfilePageView);
