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
