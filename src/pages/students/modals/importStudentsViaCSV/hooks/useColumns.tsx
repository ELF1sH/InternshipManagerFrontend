import React from 'react';
import { ColumnsType } from 'antd/es/table';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { IAddStudentPayload } from 'domain/repositories/api/interfaces/IStudentsRepository';

export const useAddStudentsTableColumns = (onDelete: (student: IAddStudentPayload) => void) => {
  const columns: ColumnsType<IAddStudentPayload> = [
    {
      title: 'Фамилия',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Имя',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'Отчество',
      dataIndex: 'patronymic',
      key: 'patronymic',
    },
    {
      title: 'Группа',
      dataIndex: 'groupNumber',
      key: 'groupNumber',
    },
    {
      key: 'action',
      render: (_: any, record: IAddStudentPayload) => (
        <IconButton
          icon={<DeleteIcon color="red" />}
          onClick={() => onDelete(record)}
        />
      ),
    },
  ];

  return { columns };
};
