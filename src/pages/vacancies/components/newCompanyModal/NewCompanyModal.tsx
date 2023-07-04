import React, { useState } from 'react';
import { Form, Table } from 'antd';
import { useForm } from 'antd/es/form/Form';

import Text from 'components/ui/atoms/text/Text';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import Button from 'components/ui/atoms/button/Button';
import DeleteIcon from 'components/ui/atoms/icons/DeleteIcon';

import { ICreateCompanyPayload } from 'domain/repositories/api/interfaces/ICompanyRepository';
import { ICompany } from 'domain/entities/company';

import { getYupSync } from 'modules/form/yupSync';

import { validationSchema } from 'pages/vacancies/components/newCompanyModal/constants/validationSchema';

interface NewCompanyModalProps {
  addCompanies: (companies: ICreateCompanyPayload[]) => void;
}

const NewCompanyModal: React.FC<NewCompanyModalProps> = ({ addCompanies }) => {
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const { closeModal } = useModalViewModel();

  const [form] = useForm();

  const onPushCompanyToTable = (values: ICompany) => {
    setCompanies((prev) => [...prev, values]);

    form.resetFields();
  };

  const onSubmit = () => {
    addCompanies(companies);
    closeModal();
  };

  const yupSync = getYupSync(validationSchema());

  const columns = [
    {
      title: 'Компания',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Контактный телефон',
      dataIndex: 'contactNumber',
      key: 'contactNumber',
    },
    {
      title: 'ФИО представителя',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (_: any, record: ICompany) => (
        <Text>{`${record.contactLastname} ${record.contactFirstname} ${record.contactPatronymic}`}</Text>
      ),
    },
    {
      key: 'action',
      width: '0px',
      render: (_: any, record: any) => (
        <IconButton
          icon={<DeleteIcon size={24} color="red" />}
          onClick={() => setCompanies(
            (prev) => prev.filter((company) => company.name !== record.name),
          )}
        />
      ),
    },
  ];

  return (
    <>
      <Form onFinish={onPushCompanyToTable} form={form}>
        <Space gap={14} direction="vertical">
          <Form.Item name="name" rules={[yupSync]}>
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item name="contactNumber" rules={[yupSync]}>
            <Input placeholder="Номер телефона" />
          </Form.Item>
          <Form.Item name="contactFirstname" rules={[yupSync]}>
            <Input placeholder="Имя" />
          </Form.Item>
          <Form.Item name="contactLastname" rules={[yupSync]}>
            <Input placeholder="Фамилия" />
          </Form.Item>
          <Form.Item name="contactPatronymic" rules={[yupSync]}>
            <Input placeholder="Отчество" />
          </Form.Item>
          <Form.Item>
            <Space justifyContent="center" paddingBottom={16}>
              <Button type="primary" htmlType="submit">Добавить ещё</Button>
            </Space>
          </Form.Item>
        </Space>
      </Form>

      <Table rowKey="name" columns={columns} dataSource={companies} />

      <Button onClick={onSubmit}>Добавить</Button>
    </>
  );
};

export default NewCompanyModal;
