export const useTableDeanColumns = () => {
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

  return { columns };
};
