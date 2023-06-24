import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

import { IStudent } from 'domain/entities/student';

const FilterForm: React.FC<{setStudents: (val: any) => void, students: IStudent[]}> = ({
  setStudents, students,
}) => (
  <Form
    onFieldsChange={(_, values) => {
      const name = values[0]?.value || '';
      const grp = values[1]?.value || '';

      const targetName = name.toLowerCase().trim();
      const targetGroup = grp.toLowerCase().trim();

      setStudents(
        students.filter((std) => `${std.firstname} ${std.lastname} ${std.patronymic}`.toLowerCase().trim()
          .includes(targetName)
        && std.groupNumber?.toLowerCase().trim().includes(targetGroup)),
      );
    }}
  >
    <Space>
      <Space gap={14} $wrap>
        <Form.Item name="student">
          <Input
            placeholder="Студент"
          />
        </Form.Item>
        <Form.Item name="group">
          <Input
            placeholder="Группа"
          />
        </Form.Item>
      </Space>
    </Space>
  </Form>
);

export default FilterForm;
