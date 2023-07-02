import React from 'react';
import { Card, Form } from 'antd';
import { useForm } from 'antd/es/form/Form';

import InputPassword from 'components/ui/atoms/input/InputPassword';
import Button from 'components/ui/atoms/button/Button';
import Space from 'components/ui/atoms/space/Space';

import { tokenRepository } from 'domain/repositories/other/TokenRepository';
import { authRepository } from 'domain/repositories/api/AuthRepository';
import { ChangePasswordUseCase } from 'domain/useCases/auth/ChangePasswordUseCase';

import { useNotifications } from 'modules/notification/useNotifications';
import { getYupSync } from 'modules/form/yupSync';

import { validateSchema } from 'pages/settings/components/constants/schema';
import { initialFormState } from 'pages/settings/components/constants/inititalFormState';

export interface IChangePasswordFormState {
  currentPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
}

const ChangePasswordCard: React.FC = () => {
  const { notifyError, notifySuccess } = useNotifications();

  const changePasswordUseCase = new ChangePasswordUseCase({
    requestCallback: authRepository.changePassword,
    notifyError,
    notifySuccess,
    tokenRepository,
  });

  const onFinish = (values: IChangePasswordFormState) => {
    changePasswordUseCase.fetch({
      payload: {
        oldPassword: values.currentPassword,
        newPassword: values.newPassword,
      },
      onSuccess: () => form.resetFields(),
    });
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
