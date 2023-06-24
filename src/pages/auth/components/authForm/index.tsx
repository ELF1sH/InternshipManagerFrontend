import React from 'react';
import { Form } from 'antd';

import Input from 'components/ui/atoms/input/Input';
import InputPassword from 'components/ui/atoms/input/InputPassword';

import { ILoginPayload } from 'domain/repositories/api/interfaces/IAuthRepository';

import { getYupSync } from 'modules/form/yupSync';

import { validationSchema } from 'pages/auth/components/authForm/constants/schema';
import { FormItem, LoginButton } from 'pages/auth/components/authForm/styled';

export interface AuthFormProps {
  isLoading: boolean;
  onSubmit: (data: ILoginPayload) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({
  isLoading,
  onSubmit,
}) => {
  const yupSync = getYupSync(validationSchema());

  return (
    <Form<ILoginPayload>
      onFinish={onSubmit}
      layout="vertical"
    >
      <FormItem name="username" rules={[yupSync]}>
        <Input placeholder="Username" size="large" />
      </FormItem>

      <FormItem name="password" rules={[yupSync]}>
        <InputPassword placeholder="Password" size="large" />
      </FormItem>

      <LoginButton type="primary" htmlType="submit" loading={isLoading} size="large">
        Войти
      </LoginButton>
    </Form>
  );
};

export default AuthForm;
