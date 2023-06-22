import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Space from 'components/ui/atoms/space/Space';
import Sidebar from 'components/ui/organisms/sidebar/SidebarController';

import { profileRepository } from 'domain/repositories/api/ProfileRepository';
import { GetProfileUseCase } from 'domain/useCases/profile/GetProfileUseCase';

import AuthorityProvider from 'modules/authority/AuthorityProvider';

import TemplatesPage from 'pages/templates/TemplatesPageProvider';
import VacanciesPage from 'pages/vacancies/VacanciesPageProvider';
import PreferencesPage from 'pages/preferences/PreferencesPageProvider';
import ProfilePage from 'pages/profile/ProfilePageProvider';
import StudentsPage from 'pages/students/StudentsPageProvider';
import { ProfileViewModel } from 'pages/profile/viewModel';

import { route } from 'utils/constants/route';

import 'antd/dist/reset.css';

const App: React.FC = () => {
  useEffect(() => {
    const getProfileUseCase = new GetProfileUseCase({
      requestCallback: profileRepository.getProfile,
    });
    const profilePageViewModel = new ProfileViewModel(getProfileUseCase);
    profilePageViewModel.initRequests();
  }, []);
  return (
    <Space>
      <Sidebar />
      <div style={{ padding: '20px 30px', flexGrow: 1 }}>
        <AuthorityProvider>
          <Routes>
            <Route path={route.base} element={<Navigate replace to={route.profile} />} />

            <Route path={route.profile} element={<ProfilePage />} />
            <Route path={route.vacancies} element={<VacanciesPage />} />
            <Route path={route.preferences} element={<PreferencesPage />} />
            <Route path={route.templates} element={<TemplatesPage />} />
            <Route path={route.students} element={<StudentsPage />} />

            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </AuthorityProvider>
      </div>
    </Space>
  );
};

export default App;
