import React from 'react';
import { Card } from 'antd';
import { DownloadOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';

import Text from 'components/ui/atoms/text/Text';

interface ReportTemplateProps {
  title: string;
  turnInDate?: string;
  description?: string;
  clickEditHandler?: (reportTemplate: ReportTemplateProps) => void
}

const ReportTemplate: React.FC<ReportTemplateProps> = ({
  title,
  turnInDate,
  description,
  clickEditHandler,
}) => (
  <Card
    title={title}
    actions={[
      <DownloadOutlined key="download" />,
      <EditOutlined
        onClick={() => {
          clickEditHandler?.({ title, description });
        }}
        key="edit"
      />,
      <EyeOutlined key="inspect" />,
    ]}
    style={{ maxWidth: '280px' }}
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
    {description}
  </Card>
);

export default ReportTemplate;
