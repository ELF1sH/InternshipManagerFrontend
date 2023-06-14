import React from 'react';
import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';

import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

export const TemplateForm: React.FC<{
    defaultValues?: {name?: string, courseNumber?: number, description?: string}
  }> = ({ defaultValues }) => (
    <Space direction="vertical" gap={16}>
      <Form initialValues={defaultValues}>
        <Space direction="vertical" gap={26}>
          <Form.Item name="title">
            <Input placeholder="Название" />
          </Form.Item>
          <Form.Item name="courseNumber">
            <Input placeholder="Номер курса" />
          </Form.Item>
          <Form.Item name="description">
            <TextArea placeholder="Описание" />
          </Form.Item>
        </Space>
      </Form>
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Нажмите или перенесите файл сюда
        </p>
        <p className="ant-upload-hint">
          Поддерживаемые форматы: .pdf .docx
        </p>
      </Dragger>
    </Space>
  );
