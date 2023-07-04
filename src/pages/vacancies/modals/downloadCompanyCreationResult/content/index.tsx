import React from 'react';
import { Typography } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

import { ICreateCompanyResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

import { CodeText } from 'pages/students/modals/downloadStudentCreationResult/content';

import { fileDownload } from 'utils/fileDownload/fileDownload';

interface IProps {
  companiesResult: ICreateCompanyResponse[];
}

const DownloadCompanyCreationResultModal: React.FC<IProps> = ({ companiesResult }) => {
  const resultToCSV = (res: ICreateCompanyResponse[]) => {
    const lines = res.map((company) => (
      `${company.company.name};${company.company.contactNumber};${company.username};${company.password}`
    ));

    return lines.join('\n');
  };

  const cvs = resultToCSV(companiesResult);

  const onDownload = () => {
    fileDownload('newCompanies.csv', cvs);
  };

  return (
    <Space direction="vertical" gap={10}>
      <Typography.Text>
        Формат данных
        <Typography.Text code>Название;Контактный номер;Логин;Пароль</Typography.Text>
      </Typography.Text>
      <CodeText>{cvs}</CodeText>
      <Button icon={<DownloadOutlined />} type="primary" onClick={onDownload}>Скачать результаты</Button>
    </Space>
  );
};

export default DownloadCompanyCreationResultModal;
