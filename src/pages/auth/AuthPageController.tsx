import React from 'react';
import { observer } from 'mobx-react-lite';

import { ILoginPayload } from 'domain/repositories/api/interfaces/IAuthRepository';

import { AuthPageViewModel } from 'pages/auth/AuthPageViewModel';
import AuthPageView from 'pages/auth/AuthPageView';

interface AuthFormControllerProps {
  viewModel: AuthPageViewModel;
}

const AuthPageController: React.FC<AuthFormControllerProps> = ({ viewModel }) => {
  const onSubmit = async ({ username, password }: ILoginPayload) => {
    await viewModel.login(username, password);
  };

  return (
    <AuthPageView
      isLoading={viewModel.pageStatus.isLoading}
      onSubmit={onSubmit}
    />
  );
};

export default observer(AuthPageController);
