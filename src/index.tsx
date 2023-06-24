import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import 'index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from 'theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from 'theme/ThemeProviderStyledComponents';

import EntityDrawerProvider from 'components/ui/organisms/entityDrawer/provider/EntityDrawerProvider';
import { ModalProvider } from 'components/ui/organisms/modal/context/ModalProvider';

import { setValidationErrors } from 'modules/form/setValidationErrors';
import AuthenticationProvider from 'modules/authentication/AuthenticationProvider';
import NotificationsProvider from 'modules/notification/NotificationsProvider';
import ModalConfirmProvider from 'modules/confirmModal/ModalConfirmProvider';

import { MobxStoreProvider } from 'storesMobx/MobxStoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

setValidationErrors();

root.render(
  <MobxStoreProvider>
    <ThemeProviderAnt>
      <ThemeProviderStyledComponents>
        <EntityDrawerProvider>
          <NotificationsProvider>
            <ModalConfirmProvider>
              <ModalProvider>
                <BrowserRouter>
                  <AuthenticationProvider>
                    <App />
                  </AuthenticationProvider>
                </BrowserRouter>
              </ModalProvider>
            </ModalConfirmProvider>
          </NotificationsProvider>
        </EntityDrawerProvider>
      </ThemeProviderStyledComponents>
    </ThemeProviderAnt>
  </MobxStoreProvider>,
);
