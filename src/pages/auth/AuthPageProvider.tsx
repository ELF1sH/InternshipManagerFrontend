import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginUseCase } from 'domain/useCases/auth/LoginUseCase';
import { authRepository } from 'domain/repositories/api/AuthRepository';
import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { useNotifications } from 'modules/notification/useNotifications';

import AuthFormController from 'pages/auth/AuthPageController';
import { AuthPageViewModel } from 'pages/auth/AuthPageViewModel';

import { useStore } from 'storesMobx/MobxStoreProvider';

const AuthPageProvider: React.FC = () => {
  const navigate = useNavigate();

  const { notifyError } = useNotifications();

  const { userStore } = useStore();

  const loginUseCase = new LoginUseCase({
    requestCallback: authRepository.login,
    notifyError,
    tokenRepository,
    navigate,
    userStore,
  });

  const viewModel = new AuthPageViewModel(loginUseCase, userStore);

  return (
    <>
      <AuthFormController viewModel={viewModel} />
    </>
  );
};

export default AuthPageProvider;
