import React from 'react';
import {
  Form, Input,
} from 'antd';

import Space from 'components/ui/atoms/space/Space';

import { useProfilePageViewModel } from 'pages/profile/viewModel/context';

export const FilterForm = () => {
  const {
    setCompanySearchString,
    setVacancySearchString,
  } = useProfilePageViewModel();

  return (
    <Form layout="vertical" style={{ width: '100%' }}>
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
