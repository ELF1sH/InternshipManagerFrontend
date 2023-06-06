import React from 'react';
import { observer } from 'mobx-react-lite';

import AuthPage from 'pages/auth/AuthPageProvider';

import { useStore } from 'storesMobx/MobxStoreProvider';

import { IChildren } from 'utils/interfaces/IChildren';

const AuthenticationProvider: React.FC<IChildren> = ({ children }) => {
  const { userStore } = useStore();

  if (userStore.isAuthenticated) return <>{children}</>;
  return <AuthPage />;
};

export default observer(AuthenticationProvider);
