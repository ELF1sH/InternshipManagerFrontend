import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

import { IVacanciesFilterFormState } from 'pages/vacancies/components/filterForm/types';
import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';

const FilterForm: React.FC = () => {
  const { setCompanySearchString, setVacancySearchString } = useVacanciesPageViewModel();
  return (
    <Form<IVacanciesFilterFormState> layout="vertical">
      <Space gap={20}>
        <Form.Item name="company" label="Компания" style={{ width: '100%' }}>
          <Input onChange={(e) => {
            setCompanySearchString(e.currentTarget.value);
          }}
          />
        </Form.Item>
        <Form.Item name="vacancy" label="Вакансия" style={{ width: '100%' }}>
          <Input onChange={(e) => {
            setVacancySearchString(e.currentTarget.value);
          }}
          />
        </Form.Item>
      </Space>
    </Form>
  );
};

export default FilterForm;
