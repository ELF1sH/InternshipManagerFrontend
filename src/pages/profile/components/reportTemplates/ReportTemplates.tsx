import React from 'react';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';

const { Title } = Typography;

const ReportTemplates: React.FC = () => {
  const { diaries } = useProfilePageViewModel();

  return (
    <Space direction="vertical">
      <Title level={3}>Сданные дневники практик</Title>
      <Space gap={20} $wrap>
        {
          diaries.map(({
            id, filename, uploadDate, review, status,
          }) => (
            <ReportTemplate
              id={id}
              key={id}
              title={filename}
              turnInDate={uploadDate}
              review={review}
              status={status}
            />
          ))
        }
      </Space>
    </Space>
  );
};

export default observer(ReportTemplates);
