import React from 'react';
import { Card } from 'antd';
import {
  CheckCircleOutlined, CloseCircleOutlined, DownloadOutlined, EditOutlined,
} from '@ant-design/icons';

import Text from 'components/ui/atoms/text/Text';
import Space from 'components/ui/atoms/space/Space';

import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { GetDiaryUseCase } from 'domain/useCases/diary/GetDiaryUseCase';
import { IDiaryStatus } from 'domain/entities/diary';

import { UserRole } from 'modules/authority/enums/UserRole';

import { userStore } from 'storesMobx/stores/UserStore';

interface ReportTemplateProps {
  id?: number;
  title: string;
  turnInDate?: string;
  description?: string;
  review?: string
  status?: IDiaryStatus
  clickEditHandler?: (reportTemplate: ReportTemplateProps) => void
}

const b64toBlob = (content: string) => {
  const contentType = 'application/pdf';
  const sliceSize = 512;
  // method which converts base64 to binary
  const byteCharacters = window.atob(content);

  const byteArrays = [];
  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);
    const byteNumbers = new Array(slice.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  const blob = new Blob(byteArrays, {
    type: contentType,
  }); // statement which creates the blob
  return blob;
};

const GetReportTemplateStatus = ({ status }:{status: IDiaryStatus}) => {
  switch (status) {
    case IDiaryStatus.ACCEPTED:

      return (
        <Text strong style={{ color: 'green' }}>
          <Space alignItems="center" gap={4}>
            Принято
            <CheckCircleOutlined />
          </Space>
        </Text>
      );

    case IDiaryStatus.PENDING:

      return (
        <Text strong>
          На рассмотрении
        </Text>

      );

    case IDiaryStatus.REJECTED:

      return (
        <Text strong style={{ color: 'red' }}>
          <Space alignItems="center" gap={4}>
            Отказано
            <CloseCircleOutlined />
          </Space>
        </Text>

      );

    default:
  }

  return null;
};

const ReportTemplate: React.FC<ReportTemplateProps> = ({
  id,
  title,
  turnInDate,
  description,
  review,
  status,
  clickEditHandler,
}) => {
  const getDiaryUseCase = new GetDiaryUseCase({
    requestCallback: diaryRepository.getDiary,
  });

  const onDownload = () => {
    getDiaryUseCase.fetch({
      payload: { id: id ? id.toString() : '' },
      onSuccess: (res: any) => {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', title);
        document.body.appendChild(link);
        link.click();
        link.remove();
      },
    });
  };

  const cardActions = [<DownloadOutlined key="download" onClick={onDownload} />];
  if (userStore.role !== UserRole.STUDENT) {
    cardActions.push(
      <EditOutlined
        onClick={() => {
          clickEditHandler?.({ id, title, description });
        }}
        key="edit"
      />,
    );
  }

  return (
    <Card
      title={title}
      actions={cardActions}
      style={{ width: '280px' }}
    >
      <Space direction="vertical">

        {
        turnInDate && (
          <Text>
            Дата сдачи:
            &nbsp;
            <Text strong>{turnInDate}</Text>
          </Text>
        )
      }
        {
        review && (
          <Text>
            Комментарий:
            &nbsp;
            <Text strong>{review}</Text>
          </Text>
        )
      }
        {
        status && (
          <Space>
            <Text>
              Статус:
              &nbsp;
            </Text>

            <GetReportTemplateStatus status={status} />
          </Space>
        )
      }
        {description}
      </Space>
    </Card>
  );
};

export default ReportTemplate;
