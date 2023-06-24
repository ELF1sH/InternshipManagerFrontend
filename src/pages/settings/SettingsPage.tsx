import React from 'react';

import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';

import ChangePasswordCard from 'pages/settings/components/ChangePasswordCard';

const SettingsPage: React.FC = () => (
  <>
    <PageHeader header="Настройки" />
    <ChangePasswordCard />
  </>
);

export default SettingsPage;
