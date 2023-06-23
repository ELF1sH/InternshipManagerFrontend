import React, { useState } from 'react';
import { Table } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { IStudent } from 'domain/entities/student';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import NewUserModal from 'pages/students/components/newUserModal.tsx/NewUserModal';
import FilterForm from 'pages/students/components/filterForm/FilterForm';

import { userStore } from 'storesMobx/stores/UserStore';

const StudentsPageView: React.FC = () => {
  const columns = [
    {
      title: 'Студент',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Группа',
      dataIndex: 'groupNumber',
      key: 'groupNumber',
    },
    {
      title: 'Стажировка',
      dataIndex: 'internshipPlace',
      key: 'internshipPlace',
    },

  ];

  const { openModal } = useModalViewModel();
  const { studentsList, addStudentsList } = useStudentsPageViewModel();
  const [students, setStudents] = useState<IStudent[]>(studentsList);

  const currentRole = userStore.profile.role;

  if (currentRole === UserRole.UNIVERSITY_DEPARTMENT) {
    return (
      <>
        <PageHeader header="Студенты">
          <Button
            type="text"
            icon={<PlusIcon size={24} />}
            onClick={() => openModal({
              formTitle: 'Добавление студентов',
              content: <NewUserModal addStudents={addStudentsList} />,
              footer: false,
            })}
          >
            Добавить вручную

          </Button>

        </PageHeader>
        <Space direction="vertical" gap={20}>
          <FilterForm
            setStudents={(val) => setStudents(val)}
            students={studentsList}
          />
          <Table
            columns={columns}
            dataSource={students.map(({
              firstname, lastname, patronymic, internshipPlace, groupNumber, id,
            }) => ({
              internshipPlace: internshipPlace ?? '--',
              groupNumber: groupNumber ?? '--',
              name: `${firstname ?? ''} ${lastname ?? ''} ${patronymic ?? ''}`,
              key: id,
            }))}
          />
        </Space>
      </>
    );
  }

  return (
    <>
      <PageHeader header="Набор студентов" />
      <Space direction="vertical" gap={20} />
    </>
  );
};

export default StudentsPageView;
