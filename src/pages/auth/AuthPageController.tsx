import React from 'react';
import { observer } from 'mobx-react-lite';

import { ILoginPayload } from 'domain/entities/auth';

import { AuthPageViewModel } from 'pages/auth/AuthPageViewModel';
import AuthPageView from 'pages/auth/AuthPageView';

import { useFormError } from 'utils/form/useFormError';

interface AuthFormControllerProps {
  viewModel: AuthPageViewModel;
}

const AuthPageController: React.FC<AuthFormControllerProps> = ({ viewModel }) => {
  const { getValidateMessages } = useFormError();

  const onSubmit = async ({ username, password }: ILoginPayload) => {
    await viewModel.login(username, password);
  };

  return (
    <AuthPageView
      isLoading={viewModel.pageStatus.isLoading}
      onSubmit={onSubmit}
      getValidateMessages={getValidateMessages}
    />
  );
};

export default observer(AuthPageController);
