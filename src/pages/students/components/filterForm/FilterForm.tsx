import React from 'react';
import { Form } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import Input from 'components/ui/atoms/input/Input';

const FilterForm: React.FC = () => (
  <Form>
    <Space>
      <Space gap={14} $wrap>
        <Form.Item name="p">
          <Input placeholder="p" />
        </Form.Item>
        <Form.Item name="student">
          <Input placeholder="Студент" />
        </Form.Item>
        <Form.Item name="group">
          <Input placeholder="Группа" />
        </Form.Item>
        <Form.Item name="company">
          <Input placeholder="Компания" />
        </Form.Item>
        <Form.Item name="role">
          <Input placeholder="Роль" />
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
