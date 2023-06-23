import React from 'react';
import { UploadProps } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';

import { diaryRepository } from 'domain/repositories/api/DiaryRepository';

const DndFileUpload: React.FC = () => {
  const props: UploadProps = {
    name: 'report',
    multiple: false,
    accept: '.docs,.doc,.pdf',
    onChange(info) {
      diaryRepository.postDiary({ file: info.file.originFileObj as File });
    },
  };

  return (
    <Dragger {...props} customRequest={({ onSuccess }) => onSuccess!('ok')}>
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
