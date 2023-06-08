import React from 'react';
import { UploadProps } from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import { InboxOutlined } from '@ant-design/icons';

const DndFileUpload: React.FC = () => {
  const props: UploadProps = {
    name: 'report',
    multiple: false,
    accept: '.docs,.doc,.pdf',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        console.log(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        console.log(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
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
