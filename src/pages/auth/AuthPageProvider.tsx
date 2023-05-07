import React from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginUseCase } from 'domain/useCases/auth/LoginUseCase';
import { authRepository } from 'domain/repositories/api/AuthRepository';
import { tokenRepository } from 'domain/repositories/other/TokenRepository';

import { useNotifications } from 'modules/notification/useNotifications';

import AuthFormController from 'pages/auth/AuthPageController';
import { AuthPageViewModel } from 'pages/auth/AuthPageViewModel';

const AuthPageProvider: React.FC = () => {
  const navigate = useNavigate();

  const { notifyError } = useNotifications();

  const loginUseCase = new LoginUseCase({
    requestCallback: authRepository.login,
    notifyError,
    tokenRepository,
    navigate,
  });

  const viewModel = new AuthPageViewModel(loginUseCase);

  return (
    <>
      <AuthFormController viewModel={viewModel} />
    </>
  );
};

export default AuthPageProvider;
