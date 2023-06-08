import React from 'react';
import { Card } from 'antd';
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons';

import Text from 'components/ui/atoms/text/Text';

interface ReportTemplateProps {
  title: string;
  turnInDate?: string;
}

const ReportTemplate: React.FC<ReportTemplateProps> = ({
  title,
  turnInDate,
}) => (
  <Card
    title={title}
    actions={[
      <DownloadOutlined key="download" />,
      <EyeOutlined key="inspect" />,
    ]}
  >
    {
      turnInDate && (
      <Text>
        Дата сдачи:
        &nbsp;
        <Text strong>{turnInDate}</Text>
      </Text>
      )
    }
  </Card>
);

export default ReportTemplate;
