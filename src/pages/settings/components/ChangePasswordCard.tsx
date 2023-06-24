import React from 'react';
import { Card, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';

import InputPassword from 'components/ui/atoms/input/InputPassword';
import Button from 'components/ui/atoms/button/Button';
import Space from 'components/ui/atoms/space/Space';

import { getYupSync } from 'modules/form/yupSync';

import { validateSchema } from 'pages/settings/components/constants/schema';
import { initialFormState } from 'pages/settings/components/constants/inititalFormState';

export interface IChangePasswordFormState {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

const ChangePasswordCard: React.FC = () => {
  const onFinish = (values: IChangePasswordFormState) => {
    console.log('submitting');
    console.log(values);
  };

  const yupSync = getYupSync(validateSchema());

  const [form] = useForm<IChangePasswordFormState>();

  return (
    <Card title="Смена пароля">
      <Form
        form={form}
        initialValues={initialFormState}
        layout="vertical"
        onFinish={onFinish}
      >
        <Space direction="vertical" gap={20}>
          <Form.Item name="currentPassword" label="Текущий пароль" rules={[yupSync]}>
            <InputPassword />
          </Form.Item>
          <Form.Item name="newPassword" label="Новый пароль" rules={[yupSync]}>
            <InputPassword />
          </Form.Item>
          <Form.Item
            name="newPasswordConfirmation"
            label="Подтверждение пароля"
            rules={[yupSync, {
              message: 'Пароли не совпадают',
              validator: (object, value) => {
                const { newPassword } = form.getFieldsValue();
                return newPassword === value ? Promise.resolve() : Promise.reject();
              },
            }]}
          >
            <InputPassword />
          </Form.Item>
          <Button type="primary" htmlType="submit">Подтвердить</Button>
        </Space>
      </Form>
    </Card>
  );
};

export default ChangePasswordCard;
