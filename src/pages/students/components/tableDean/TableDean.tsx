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

import ExpandedRow from 'pages/students/components/tableDean/components/expandedRow/ExpandedRow';
import { getDataSource } from 'pages/students/components/tableDean/helpers/getDataSource';
import { useImportStudentsViaCSVModal } from 'pages/students/modals/importStudentsViaCSV';
import { useTableDeanColumns } from 'pages/students/components/tableDean/hooks/useTableDeanColumns';
import { useStudentsPageViewModel } from 'pages/students/viewModel/context';
import NewUserModal from 'pages/students/components/newUserModal.tsx/NewUserModal';
import FilterForm from 'pages/students/components/filterForm/FilterForm';

const TableDean: React.FC = () => {
  const { openModal } = useModalViewModel();
  const {
    studentsList, filtredStudents: filtredStudentsPromise, addStudentsList, selectionStatuses,
  } = useStudentsPageViewModel();

  const { columns } = useTableDeanColumns();

  const { open } = useStudentEntityDrawer();

  const [filtredStudents, setFiltredStudents] = useState<IStudent[]>(studentsList);

  useEffect(() => {
    filtredStudentsPromise.then((val) => {
      setFiltredStudents(val);
    });
  }, [filtredStudentsPromise]);

  const { openImportStudentsViaCSVModal } = useImportStudentsViaCSVModal(addStudentsList);

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
          dataSource={getDataSource(filtredStudents)}
          onRow={(record, rowIndex) => ({
            onClick: () => open(record.key),
          })}
          expandable={{
            // eslint-disable-next-line react/no-unstable-nested-components
            expandedRowRender: (record) => <ExpandedRow id={record.key} />,
          }}
        />
      </Space>
    </>
  );
};

export default observer(TableDean);
