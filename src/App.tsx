import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Space from 'components/ui/atoms/space/Space';
import Sidebar from 'components/ui/organisms/sidebar/SidebarController';

import AuthorityProvider from 'modules/authority/AuthorityProvider';

import VacanciesPage from 'pages/vacancies/VacanciesPageProvider';
import PreferencesPage from 'pages/preferences/PreferencesPageProvider';
import ProfilePage from 'pages/profile/ProfilePageProvider';

import { route } from 'utils/constants/route';

import 'antd/dist/reset.css';

const App: React.FC = () => (
  <Space>
    <Sidebar />
    <div style={{ padding: '20px 30px', flexGrow: 1 }}>
      <AuthorityProvider>
        <Routes>
          <Route path={route.base} element={<Navigate replace to={route.profile} />} />
          <Route path={route.vacancies} element={<VacanciesPage />} />
          <Route path={route.preferences} element={<PreferencesPage />} />
          <Route path={route.profile} element={<ProfilePage />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </AuthorityProvider>
    </div>
  </Space>
);

export default App;
