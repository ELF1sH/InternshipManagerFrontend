import React from 'react';
import {
  Form, Input, InputNumber,
} from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';

interface NewInternshipModalCreateProps {
  setIsModalOpenCreate:(val: boolean) => void
}

export const NewInternshipModalCreate = (
  { setIsModalOpenCreate }: NewInternshipModalCreateProps,
) => {
  const { createInternship } = useProfilePageViewModel();
  return (

    <Form
      layout="vertical"
      style={{ width: '100%' }}
      onFinish={(vals) => {
        createInternship(vals).then(() => {
          setIsModalOpenCreate(false);
        });
      }}
    >
      <Space gap={20} direction="vertical">
        <Form.Item name="companyName" label="Название компании" style={{ width: '100%' }}>
          <Input />
        </Form.Item>
        <Form.Item name="semester" label="Семестр" style={{ width: '100%' }}>
          <InputNumber
            placeholder="Номер семестра"
            min={1}
            max={8}
          />
        </Form.Item>
      </Space>

      <Form.Item style={{ marginTop: '32px' }}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
    </Form>

  );
};
