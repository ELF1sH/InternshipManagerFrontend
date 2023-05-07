import React from 'react';
import { Form } from 'antd';

import Input from 'components/ui/atoms/input/Input';
import InputPassword from 'components/ui/atoms/input/InputPassword';

import { ILoginPayload } from 'domain/entities/auth';

import { FormItem, LoginButton } from 'pages/auth/components/authForm/styled';

import { FormErrors } from 'utils/form/useFormError';

export interface AuthFormProps {
  isLoading: boolean;
  onSubmit: (data: ILoginPayload) => Promise<void>;
  getValidateMessages: () => FormErrors;
}
const AuthForm: React.FC<AuthFormProps> = ({
  isLoading,
  onSubmit,
  getValidateMessages,
}) => (
  <Form<ILoginPayload>
    onFinish={onSubmit}
    layout="vertical"
    validateMessages={getValidateMessages()}
  >
    <FormItem
      name="username"
      rules={[{ required: true }]}
    >
      <Input placeholder="Username" size="large" />
    </FormItem>

    <FormItem
      name="password"
      rules={[{ required: true }]}
    >
      <InputPassword placeholder="Password" size="large" />
    </FormItem>

    <LoginButton type="primary" htmlType="submit" loading={isLoading} size="large">
      Login
    </LoginButton>
  </Form>
);

export default AuthForm;
