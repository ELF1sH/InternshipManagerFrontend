import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';
import 'index.css';
import 'antd/dist/reset.css';
import ThemeProviderAnt from 'theme/ThemeProviderAnt';
import ThemeProviderStyledComponents from 'theme/ThemeProviderStyledComponents';

import { ModalProvider } from 'components/ui/organisms/modal/context/ModalProvider';

import AuthenticationProvider from 'modules/authentication/AuthenticationProvider';
import NotificationsProvider from 'modules/notification/NotificationsProvider';
import ModalConfirmProvider from 'modules/confirmModal/ModalConfirmProvider';

import { MobxStoreProvider } from 'storesMobx/MobxStoreProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <MobxStoreProvider>
    <ThemeProviderAnt>
      <ThemeProviderStyledComponents>
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
      </ThemeProviderStyledComponents>
    </ThemeProviderAnt>
  </MobxStoreProvider>,
);
