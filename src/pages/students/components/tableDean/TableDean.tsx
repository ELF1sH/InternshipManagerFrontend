import React from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStudentEntityDrawer } from 'components/ui/organisms/entityDrawer';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Button from 'components/ui/atoms/button/Button';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import Space from 'components/ui/atoms/space/Space';

import { useTableDeanColumns } from 'pages/students/components/tableDean/hooks/useTableDeanColumns';
import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import NewUserModal from 'pages/students/components/newUserModal.tsx/NewUserModal';
import FilterForm from 'pages/students/components/filterForm/FilterForm';

const TableDean: React.FC = () => {
  const { openModal } = useModalViewModel();
  const { studentsList, addStudentsList, setStudents } = useStudentsPageViewModel();

  const { columns } = useTableDeanColumns();

  const { open } = useStudentEntityDrawer();

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
          dataSource={studentsList.map(({
            firstname, lastname, patronymic, internshipPlace, groupNumber, id,
          }) => ({
            internshipPlace: internshipPlace ?? '--',
            groupNumber: groupNumber ?? '--',
            name: `${firstname ?? ''} ${lastname ?? ''} ${patronymic ?? ''}`,
            key: id,
          }))}
          onRow={(record, rowIndex) => ({
            onClick: () => open(record.key.toString()),
          })}
        />
      </Space>
    </>
  );
};

export default observer(TableDean);
