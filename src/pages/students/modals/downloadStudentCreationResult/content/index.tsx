import React from 'react';
import styled from 'styled-components';
import { DownloadOutlined } from '@ant-design/icons';
import { Typography } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

import { fileDownload } from 'utils/fileDownload/fileDownload';

interface DownloadStudentCreationResultModalProps {
  stringValue: string;
}

export const CodeText = styled.p`
  font-family: monospace;
  white-space: pre-line;
  background-color: #E5E5E5;
  line-height: normal;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid lightgrey;
  margin-bottom: 0;
`;

const DownloadStudentCreationResultModal: React.FC<DownloadStudentCreationResultModalProps> = ({
  stringValue,
}) => {
  const onDownload = () => {
    fileDownload('newStudents.csv', stringValue);
  };

  return (
    <Space direction="vertical" gap={10}>
      <Typography.Text>
        Формат данных
        <Typography.Text code>Фамилия;Имя;Отчество;Группа;Логин;Пароль</Typography.Text>
      </Typography.Text>
      <CodeText>{stringValue}</CodeText>
      <Button icon={<DownloadOutlined />} type="primary" onClick={onDownload}>Скачать результаты</Button>
    </Space>
  );
};

export default DownloadStudentCreationResultModal;
