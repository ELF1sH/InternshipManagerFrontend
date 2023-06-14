import React from 'react';
import { Table } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import NewUserModal from 'pages/students/components/newUserModal.tsx/NewUserModal';
import FilterForm from 'pages/students/components/filterForm/FilterForm';

const StudentsPageView: React.FC = () => {
  const columns = [
    {
      title: 'Студент',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Группа',
      dataIndex: 'group',
      key: 'group',
    },
    {
      title: 'Стажировка',
      dataIndex: 'intership',
      key: 'intership',
    },

  ];

  const { openModal } = useModalViewModel();

  return (
    <>
      <PageHeader header="Студенты">
        <Button
          type="text"
          icon={<PlusIcon size={24} />}
          onClick={() => openModal({
            formTitle: 'Добавление студентов',
            content: <NewUserModal />,
          })}
        >
          Добавить вручную

        </Button>

      </PageHeader>
      <Space direction="vertical" gap={20}>
        <FilterForm />
        <Table columns={columns} />
      </Space>
    </>
  );
};

export default StudentsPageView;
