import React, { useState } from 'react';
import { Form, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import Button from 'components/ui/atoms/button/Button';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { ICompany } from 'domain/entities/company';

import { generateRandomId } from 'utils/random';

const NewCompanyModal: React.FC<{addCompany: (val:any) => void}> = ({ addCompany }) => {
  const [company, setCompany] = useState<ColumnsType<ICompany>>([]);

  const { closeModal } = useModalViewModel();

  const setNewCompany = (values: ICompany) => {
    const companyColumnType = {
      key: generateRandomId(),
      ...values,
      name: `${values.name}`,
    };

    setCompany((current) => [...current, companyColumnType]);
  };

  const columns = [
    {
      title: 'Компания',
      dataIndex: 'name',
      key: 'name',
    },
    {
      key: 'action',
      render: (_: any, record: any) => (

        <Button
          type="ghost"
          icon={<DeleteIcon size={24} color="red" />}
          size="small"
          onClick={() => {
            setCompany((current) => current.filter((company) => company.key !== record.key));
          }}
        />
      ),
    },
  ];

  return (
    <>
      <Form onFinish={setNewCompany}>
        <Space gap={14} direction="vertical">
          <Form.Item name="name">
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item name="contactNumber">
            <Input placeholder="Номер телефона" />
          </Form.Item>
          <Form.Item name="contactFirstname">
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="contactLastname">
            <Input placeholder="Фамилия" />
          </Form.Item>
          <Form.Item name="contactPatronymic">
            <Input placeholder="Отчество" />
          </Form.Item>
          <Form.Item>
            <Space justifyContent="center" paddingBottom={16}>
              <Button type="primary" htmlType="submit">
                Добавить ещё
              </Button>
            </Space>
          </Form.Item>

          <Table columns={columns} dataSource={company} />
          <Button onClick={() => {
            addCompany(company);
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

export default NewCompanyModal;
