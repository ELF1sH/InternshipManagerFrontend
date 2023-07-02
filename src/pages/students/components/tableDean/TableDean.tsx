import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { observer } from 'mobx-react-lite';

import { useStudentEntityDrawer } from 'components/ui/organisms/entityDrawer';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Button from 'components/ui/atoms/button/Button';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import Space from 'components/ui/atoms/space/Space';

import { IStudent } from 'domain/entities/student';

import { useImportStudentsViaCSVModal } from 'pages/students/modals/importStudentsViaCSV';
import { useTableDeanColumns } from 'pages/students/components/tableDean/hooks/useTableDeanColumns';
import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import NewUserModal from 'pages/students/components/newUserModal.tsx/NewUserModal';
import FilterForm from 'pages/students/components/filterForm/FilterForm';

const TableDean: React.FC = () => {
  const { openModal } = useModalViewModel();
  const {
    studentsList, filtredStudents: filtredStudentsPromise, addStudentsList, setStudents,
  } = useStudentsPageViewModel();

  const { columns } = useTableDeanColumns();

  const { open } = useStudentEntityDrawer();

  const [filtredStudents, setFiltredStudents] = useState<
  IStudent[]
  >(studentsList);

  useEffect(() => {
    filtredStudentsPromise.then((val) => {
      setFiltredStudents(val);
    });
  }, [filtredStudentsPromise]);

  const { openImportStudentsViaCSVModal } = useImportStudentsViaCSVModal();

  return (
    <>
      <PageHeader header="Студенты">
        <Button
          type="text"
          icon={<PlusIcon />}
          onClick={() => openModal({
            formTitle: 'Добавление студентов',
            content: <NewUserModal addStudents={addStudentsList} />,
            footer: false,
          })}
        >
          Добавить вручную
        </Button>

        <Button type="text" icon={<PlusIcon />} onClick={openImportStudentsViaCSVModal}>Импортировать через CSV</Button>
      </PageHeader>

      <Space direction="vertical" gap={20}>
        <FilterForm />

        <Table
          columns={columns}
          dataSource={filtredStudents.map(({
            firstname, lastname, patronymic, company, groupNumber, id,
          }) => ({
            company: company?.name ?? '--',
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
