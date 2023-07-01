import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';

const FilterForm: React.FC = () => {
  const { setFullnameSearchString, setGroupSearchString } = useStudentsPageViewModel();
  return (
    <Form>
      <Space>
        <Space gap={14} $wrap>
          <Form.Item name="student">
            <Input
              placeholder="Студент"
              onChange={(e) => {
                setFullnameSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item name="group">
            <Input
              placeholder="Группа"
              onChange={(e) => {
                setGroupSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>

          <Form.Item name="intership">
            <Input
              placeholder="Стажировка"
              onChange={(e) => {
                setGroupSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>
        </Space>
      </Space>
    </Form>
  );
};

export default FilterForm;
