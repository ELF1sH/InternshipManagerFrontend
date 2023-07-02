import React from 'react';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import TableCompany from 'pages/students/components/tableCompany/TableCompany';
import TableDean from 'pages/students/components/tableDean/TableDean';

import { userStore } from 'storesMobx/stores/UserStore';

const StudentsPageView: React.FC = () => {
  const currentRole = userStore.role;

  const { sortedCandidates } = useStudentsPageViewModel();

  if (currentRole === UserRole.UNIVERSITY_DEPARTMENT) {
    return <TableDean />;
  }

  if (currentRole === UserRole.COMPANY) {
    return <TableCompany sortedCandidatesByGroup={sortedCandidates.sortedCandidatesByGroup} />;
  }

  return (
    <>
      <PageHeader header="Набор студентов" />
      <Space direction="vertical" gap={20} />
    </>
  );
};

export default observer(StudentsPageView);
