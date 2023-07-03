import { IStudent } from 'domain/entities/student';

export const getDataSource = (students: IStudent[]) => students.map(({
  firstname, lastname, patronymic, company, groupNumber, id,
}) => ({
  company: company?.name ?? '--',
  groupNumber: groupNumber ?? '--',
  name: `${lastname ?? ''} ${firstname ?? ''} ${patronymic ?? ''}`,
  key: id,
}));
