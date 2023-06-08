import React from 'react';
import { Typography } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';

const { Title } = Typography;

const ReportTemplates: React.FC = () => (
  <Space direction="vertical">
    <Title level={3}>Сданные дневники практик</Title>
    <Space gap={20}>
      <ReportTemplate title="Дневник 1" turnInDate="02.03.2023" />
      <ReportTemplate title="Дневник 2" turnInDate="02.03.2023" />
    </Space>
  </Space>
);

export default ReportTemplates;
