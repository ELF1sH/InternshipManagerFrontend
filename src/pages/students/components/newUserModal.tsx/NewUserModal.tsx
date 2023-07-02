import React, { useState } from 'react';
import { Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useForm } from 'antd/es/form/Form';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import Button from 'components/ui/atoms/button/Button';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { IUser } from 'domain/entities/user';

import { generateRandomId } from 'utils/random';

const NewUserModal: React.FC<{addStudents: (val: any) => void}> = ({ addStudents }) => {
  const [students, setStudents] = useState<ColumnsType<IUser>>([]);

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
          onClick={() => {
            setStudents((current) => current.filter((user) => user.key !== record.key));
          }}
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
            addStudents(students);
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
