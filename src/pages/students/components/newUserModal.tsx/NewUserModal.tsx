import React, { useState } from 'react';
import { Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import Button from 'components/ui/atoms/button/Button';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { IUser } from 'domain/entities/user';

import { generateRandomId } from 'utils/random';

const NewUserModal: React.FC = () => {
  const [students, setStudents] = useState<ColumnsType<IUser>>([]);

  const setNewUser = (values: IUser & {class: string, group: string}) => {
    const userColumnType = {
      key: generateRandomId(),
      student: `${values.lastname} ${values.firstname} ${values.patronymic}`,
      class: values.class,
      group: values.group,
    };

    setStudents((current) => [...current, userColumnType]);
  };

  const columns = [
    {
      title: 'Студент',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Поток',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Группа',
      dataIndex: 'group',
      key: 'group',
    },
    {
      key: 'action',
      render: (_: any, record: any) => (

        <Button
          type="ghost"
          icon={<DeleteIcon size={24} color="red" />}
          size="small"
          onClick={() => {
            setStudents((current) => current.filter((user) => user.key !== record.key));
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Form onFinish={setNewUser}>
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
          <Form.Item name="class">
            <Input placeholder="Поток" />
          </Form.Item>
          <Form.Item name="group">
            <Input placeholder="Группа" />
          </Form.Item>
          <Form.Item>
            <Space justifyContent="center" paddingBottom={16}>
              <Button type="primary" htmlType="submit">
                Добавить ещё
              </Button>
            </Space>

          </Form.Item>

        </Space>
      </Form>

      <Table columns={columns} dataSource={students} />
    </>
  );
};

export default NewUserModal;
