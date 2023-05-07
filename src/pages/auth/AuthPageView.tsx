import React from 'react';

import ThemeTogglerController from 'components/ui/molecules/themeToggler/ThemeTogglerProvider';

import {
  AuthFormContainer, AuthPageWrapper, LogoStyled, SwitchesContainer,
} from 'pages/auth/styled';
import AuthForm, { AuthFormProps } from 'pages/auth/components/authForm';

const AuthPageView: React.FC<AuthFormProps> = (props) => (
  <AuthPageWrapper>
    <AuthFormContainer>
      <LogoStyled />
      <AuthForm {...props} />
      <SwitchesContainer>
        <ThemeTogglerController />
      </SwitchesContainer>
    </AuthFormContainer>
  </AuthPageWrapper>
);

export default AuthPageView;
