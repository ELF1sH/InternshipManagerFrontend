import React, { useState } from 'react';
import { Form, Table } from 'antd';
import { useForm } from 'antd/es/form/Form';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import Button from 'components/ui/atoms/button/Button';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { IAddStudentPayload, IAddStudentsListPayload } from 'domain/repositories/api/interfaces/IStudentsRepository';
import { IUser } from 'domain/entities/user';

import { useDownloadStudentCreationResult } from 'pages/students/modals/downloadStudentCreationResult';
import { StudentsPageViewModel } from 'pages/students/viewModel';

import compareObjects from 'utils/compareObjects';
import { generateRandomId } from 'utils/random';

interface NewUserModalProps {
  addStudents: StudentsPageViewModel['addStudentsList'];
}

const NewUserModal: React.FC<NewUserModalProps> = ({ addStudents }) => {
  const [students, setStudents] = useState<IAddStudentsListPayload>([]);

  const { openDownloadStudentCreationResult } = useDownloadStudentCreationResult();

  const { closeModal } = useModalViewModel();

  const [form] = useForm();

  const setNewUser = (values: IUser) => {
    const userColumnType = {
      key: generateRandomId(),
      ...values,
      username: `${values.lastname} ${values.firstname} ${values.patronymic}`,
      password: `${values.lastname} ${values.firstname} ${values.patronymic}`,
    };

    setStudents((current) => [...current, userColumnType]);

    form.resetFields();
  };

  const onDelete = (record: IAddStudentPayload) => {
    setStudents((prev) => prev.filter((student) => !compareObjects(student, record)));
  };

  const columns = [
    {
      title: 'Студент',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Группа',
      dataIndex: 'groupNumber',
      key: 'groupNumber',
    },
    {
      key: 'action',
      render: (_: any, record: any) => (
        <IconButton
          icon={<DeleteIcon color="red" />}
          onClick={() => onDelete(record)}
        />
      ),
    },
  ];

  return (
    <>
      <Form onFinish={setNewUser} form={form}>
        <Space gap={14} direction="vertical">
          <Form.Item name="lastname">
            <Input placeholder="Фамилия" />
          </Form.Item>
          <Form.Item name="firstname">
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="patronymic">
            <Input placeholder="Отчество" />
          </Form.Item>
          <Form.Item name="groupNumber">
            <Input placeholder="Группа" />
          </Form.Item>
          <Form.Item>
            <Space justifyContent="center" paddingBottom={16}>
              <Button type="primary" htmlType="submit">
                Добавить ещё
              </Button>
            </Space>
          </Form.Item>

          <Table columns={columns} dataSource={students} />
          <Button onClick={() => {
            addStudents(students, (res) => openDownloadStudentCreationResult(res));
            closeModal();
          }}
          >
            Добавить
          </Button>
        </Space>
      </Form>
    </>
  );
};

export default NewUserModal;
