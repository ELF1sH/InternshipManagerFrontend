import React from 'react';
import { UploadProps } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';

import { diaryRepository } from 'domain/repositories/api/DiaryRepository';

import { ErrorNotificationType, SuccessNotificationType } from 'modules/notification/types';
import { useNotifications } from 'modules/notification/useNotifications';

export interface DndFileUploadProps {
  initRequests: () => void;
}

const DndFileUpload: React.FC<DndFileUploadProps> = ({ initRequests }) => {
  const { notifyError, notifySuccess } = useNotifications();

  const props: UploadProps = {
    name: 'report',
    multiple: false,
    accept: '.docx,.doc,.pdf',
    onChange(info) {
      const file = info.fileList[0].originFileObj;

      if (file) {
        diaryRepository.postDiary({ file: file as File })
          .then(() => {
            notifySuccess(SuccessNotificationType.SUCCESSFULLY_UPLOADED);

            initRequests();
          })
          .catch(() => notifyError(ErrorNotificationType.FAILED_TO_UPLOAD));
      }
    },
  };

  return (
    <Dragger
      {...props}
      customRequest={({ onSuccess }) => onSuccess!('ok')}
      beforeUpload={() => false}
      fileList={[]}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Нажмите или перенесите файл сюда</p>
      <p className="ant-upload-hint">
        Поддерживаемые форматы: .pdf .docx .doc
      </p>
    </Dragger>
  );
};

export default DndFileUpload;
