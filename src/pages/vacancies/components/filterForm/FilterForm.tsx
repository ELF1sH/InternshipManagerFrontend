import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

import { IVacanciesFilterFormState } from 'pages/vacancies/components/filterForm/types';

const FilterForm: React.FC = () => (
  <Form<IVacanciesFilterFormState> layout="vertical">
    <Space gap={20}>
      <Form.Item name="company" label="Company" style={{ width: '100%' }}>
        <Input />
      </Form.Item>
      <Form.Item name="vacancy" label="Vacancy" style={{ width: '100%' }}>
        <Input />
      </Form.Item>
    </Space>
  </Form>
);

export default FilterForm;
