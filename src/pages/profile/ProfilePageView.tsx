import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import Company from 'components/ui/molecules/company/Company';

import { useUploadReportModal } from 'pages/profile/modals/uploadReport/useUploadReportModal';
import ReportTemplates from 'pages/profile/components/reportTemplates/ReportTemplates';
import ProfileHeader from 'pages/profile/components/profileHeader/ProfileHeader';

const ProfilePageView: React.FC = () => {
  const { handleOpenModal } = useUploadReportModal();

  return (
    <>
      <ProfileHeader />
      <Space direction="vertical" gap={25}>
        <Company
          name="red_mad_robot"
          companyRole="Frontend разработчик"
          beginningDate="03.06.2022"
        />
        <Button type="primary" onClick={handleOpenModal}>Сдать дневник практики</Button>
        <ReportTemplates />
      </Space>
    </>
  );
};

export default ProfilePageView;
