import React from 'react';
import { Card, Typography } from 'antd';
import { DownloadOutlined, EditOutlined } from '@ant-design/icons';

import { diaryTemplateRepository } from 'domain/repositories/api/DiaryTemplateRepository';
import { GetDiaryTemplateUseCase } from 'domain/useCases/diaryTemplate/GetDiaryTemplateUseCase';
import { IDiaryTemplate } from 'domain/entities/diaryTemplate';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useCreateTemplateModal } from 'pages/templates/modals/createTemplate';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface DiaryTemplateProps {
  template: IDiaryTemplate;
}

const DiaryTemplate: React.FC<DiaryTemplateProps> = ({
  template,
}) => {
  const { role } = useStore().userStore;

  const getDiaryTemplate = new GetDiaryTemplateUseCase({
    requestCallback: diaryTemplateRepository.getDiaryTemplate,
  });

  const { openCreateTemplateModal } = useCreateTemplateModal(() => {});

  const onDownload = () => {
    getDiaryTemplate.fetch({
      payload: { id: template.id.toString() },
      onSuccess: (res: any) => {
        const url = window.URL.createObjectURL(new Blob([res]));
        const link = document.createElement('a');

        link.href = url;
        link.setAttribute('download', template.filename);
        document.body.appendChild(link);
        link.click();
        link.remove();
      },
    });
  };

  const cardActions = [<DownloadOutlined key="download" onClick={onDownload} />];
  if (role === UserRole.UNIVERSITY_DEPARTMENT) {
    cardActions.push(
      <EditOutlined
        onClick={() => openCreateTemplateModal({
          course: template.course,
          description: template.course,
          file: null,
        })}
        key="edit"
      />,
    );
  }

  return (
    <Card
      title={template.filename}
      actions={cardActions}
      style={{ width: '280px' }}
    >
      {
        template.description && (
          <>
            <Typography.Text>
              Описание:
              &nbsp;
              {template.description}
            </Typography.Text>
            <br />
          </>
        )
      }

      {
        template.course && (
          <>
            <Typography.Text>
              Курс:
              &nbsp;
              {template.course}
            </Typography.Text>
            <br />
          </>
        )
      }

      <Typography.Text>
        Дата загрузки:&nbsp;
        {template.uploadDate}
      </Typography.Text>
    </Card>
  );
};

export default DiaryTemplate;
