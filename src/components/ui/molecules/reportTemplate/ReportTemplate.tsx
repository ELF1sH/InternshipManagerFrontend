import React from 'react';
import { Card } from 'antd';
import { DownloadOutlined, EditOutlined } from '@ant-design/icons';

import Text from 'components/ui/atoms/text/Text';

import { diaryRepository } from 'domain/repositories/api/DiaryRepository';
import { GetDiaryUseCase } from 'domain/useCases/diary/GetDiaryUseCase';

import { UserRole } from 'modules/authority/enums/UserRole';

import { userStore } from 'storesMobx/stores/UserStore';

interface ReportTemplateProps {
  id?: number;
  title: string;
  turnInDate?: string;
  description?: string;
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

const ReportTemplate: React.FC<ReportTemplateProps> = ({
  id,
  title,
  turnInDate,
  description,
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
};

export default ReportTemplate;
