import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import Input from 'components/ui/atoms/input/Input';

import { IStudent } from 'domain/entities/student';

const FilterForm: React.FC<{setStudents: (val: any) => void, students: IStudent[]}> = ({
  setStudents, students,
}) => (
  <Form
    onFieldsChange={(vals) => {
      const name = vals[0]?.value || ' ';
      const grp = vals[1]?.value || ' ';

      setStudents(
        students.filter((std) => `${std.firstname} ${std.lastname} ${std.patronymic}`.toLowerCase().trim()
          .includes(name.toLowerCase().trim())
        && std.groupNumber?.toLowerCase().trim().includes(grp.toLowerCase().trim())),
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
      <div style={{ display: 'inline-flex', gap: 14 }}>
        <Form.Item>
          <Button>Поиск</Button>
        </Form.Item>
      </div>
    </Space>
  </Form>
);

export default FilterForm;
