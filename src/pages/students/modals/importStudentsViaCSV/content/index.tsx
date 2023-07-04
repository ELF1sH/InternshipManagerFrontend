import React, { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam } from 'antd/es/upload';
import { Table } from 'antd';

import Button from 'components/ui/atoms/button/Button';
import Space from 'components/ui/atoms/space/Space';

import {
  IAddStudentPayload,
  IAddStudentsListPayload,
} from 'domain/repositories/api/interfaces/IStudentsRepository';

import { useDownloadStudentCreationResult } from 'pages/students/modals/downloadStudentCreationResult';
import { StudentsPageViewModel } from 'pages/students/viewModel';
import { useAddStudentsTableColumns } from 'pages/students/modals/importStudentsViaCSV/hooks/useColumns';

import compareObjects from 'utils/compareObjects';

export interface ImportStudentsViaCVSModalProps {
  addStudents: StudentsPageViewModel['addStudentsList'];
}

const ImportStudentsViaCVSModal: React.FC<ImportStudentsViaCVSModalProps> = ({ addStudents }) => {
  const { openDownloadStudentCreationResult } = useDownloadStudentCreationResult();

  const [students, setStudents] = useState<IAddStudentsListPayload>([]);

  const onDelete = (record: IAddStudentPayload) => {
    setStudents((prev) => prev.filter((student) => !compareObjects(student, record)));
  };

  const { columns } = useAddStudentsTableColumns(onDelete);

  const onChange = (info: UploadChangeParam) => {
    const file = info.fileList[0].originFileObj;

    if (file) {
      file.text().then((content) => {
        const lines = content.split('\n');

        const newStudents = lines.map((line) => {
          const lineAttributes = line.split(';');

          return {
            lastname: lineAttributes[0],
            firstname: lineAttributes[1],
            patronymic: lineAttributes[2],
            groupNumber: lineAttributes[3],
          };
        });

        setStudents(newStudents);
      });
    }
  };

  const onCreate = () => {
    addStudents(
      students,
      (res) => openDownloadStudentCreationResult(res),
    );
  };

  return (
    <Space direction="vertical" gap={20}>
      <Dragger
        customRequest={({ onSuccess }) => onSuccess!('ok')}
        beforeUpload={() => false}
        fileList={[]}
        accept=".csv"
        multiple
        name="students"
        onChange={onChange}
      >
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Нажмите или перенесите файл сюда</p>
        <p className="ant-upload-hint">Поддерживаемые форматы: .cvs</p>
        <p className="ant-upload-text">Формат строки: Иванов;Иван;Иванович;972002</p>
      </Dragger>

      <Table columns={columns} dataSource={students} rowKey="lastname" />

      <Button onClick={onCreate}>Добавить</Button>
    </Space>
  );
};

export default ImportStudentsViaCVSModal;
