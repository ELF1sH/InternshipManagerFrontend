import React, { useState } from 'react';
import { Table, Tabs } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

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
  if (currentRole === UserRole.COMPANY) {
    const columns = [
      {
        title: 'Студент',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Вакансия',
        dataIndex: 'vacancy',
        key: 'vacancy',
      },
      {
        key: 'action',
        title: 'Статус студента',
        render: (_: any, record: any) => (

          <IconButton
            type="ghost"
            icon={<AcceptedOffer />}
            size="large"
            onClick={() => {
              openModal({
                formTitle: 'Отправить студенту вердикт',
                content: (
                  <Space direction="vertical" gap={20}>
                    Вы можете отправить студенту оффер или отказ.
                    Студент увидит ваше решение.
                    Если вы отправите оффер, у студента появится
                    возможность принять/отклонить его.
                    <Space direction="horizontal" justifyContent="space-between">
                      <Button
                        onClick={() => {}}
                      >
                        Отправить отказ
                      </Button>

                      <Button
                        type="primary"
                        onClick={() => {}}
                      >
                        Отправить оффер
                      </Button>
                    </Space>
                  </Space>),
                footer: false,
              });
            }}
          />
        ),
      },

    ];
    return (
      <>
        <PageHeader header="Набор студентов" />
        <Space direction="vertical" gap={20}>
          <Tabs
            tabPosition="left"
            items={
            [
              {
                label: '2021-2022 (9720Р)',
                key: '2021-2022 (9720Р)',
                children: <Table
                  columns={columns}
                  dataSource={[{

                  }]}
                />,
              },
              {
                label: '2020-2021 (9719Р)',
                key: '2020-2021 (9719Р)',
                children: <div>2</div>,
              },
            ]
}
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
