import React from 'react';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import Company from 'components/ui/molecules/company/Company';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';
import { useUploadReportModal } from 'pages/profile/modals/uploadReport/useUploadReportModal';
import ReportTemplates from 'pages/profile/components/reportTemplates/ReportTemplates';
import ProfileHeader from 'pages/profile/components/profileHeader/ProfileHeader';

const ProfilePageView: React.FC = () => {
  const { handleOpenModal } = useUploadReportModal();
  const { internshipHistory } = useProfilePageViewModel();
  return (
    <>
      <ProfileHeader />
      <Space direction="vertical" gap={25}>
        {
          internshipHistory.map(({ company, id, startDate }) => (

            <Company
              key={id}
              name={company.name}
              beginningDate={startDate}
            />
          ))
        }

        <Button type="primary" onClick={handleOpenModal}>Сдать дневник практики</Button>
        <ReportTemplates />
      </Space>
    </>
  );
};

export default observer(ProfilePageView);
