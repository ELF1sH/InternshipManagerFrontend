import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidebar from 'components/ui/organisms/sidebar/SidebarController';

import AuthorityProvider from 'modules/authority/AuthorityProvider';

import VacanciesPage from 'pages/vacancies/VacanciesPageProvider';

import { route } from 'utils/constants/route';

import 'antd/dist/reset.css';

const App: React.FC = () => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={{ padding: '20px 30px', flexGrow: 1 }}>
      <AuthorityProvider>
        <Routes>
          <Route path={route.vacancies} element={<VacanciesPage />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </AuthorityProvider>
    </div>
  </div>
);

export default App;
