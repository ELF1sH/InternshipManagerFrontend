import React from 'react';
import { useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { pathAccess } from 'modules/authority/pathAccess';

import { useStore } from 'storesMobx/MobxStoreProvider';

import { AppRoute } from 'utils/constants/route';
import { IChildren } from 'utils/interfaces/IChildren';

const AuthorityProvider: React.FC<IChildren> = ({ children }) => {
  const { pathname } = useLocation();

  const { profile } = useStore().userStore;

  if (pathAccess[profile?.role].includes(pathname as AppRoute)) return <>{children}</>;
  return <>NO ACCESS</>;
};

export default observer(AuthorityProvider);
