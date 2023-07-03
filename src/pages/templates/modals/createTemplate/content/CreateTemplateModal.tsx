import React from 'react';
import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { UploadChangeParam } from 'antd/es/upload';

import Button from 'components/ui/atoms/button/Button';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

interface TemplateFormProps {

}

const CreateTemplateModal: React.FC = () => {
  const onDraggerChange = (info: UploadChangeParam) => {
    const file = info.fileList[0].originFileObj;

    console.log(file);
  };

  return (
    <Space direction="vertical" gap={16}>
      <Form>
        <Space direction="vertical" gap={20}>
          <Form.Item name="courseNumber">
            <Input placeholder="Номер курса" />
          </Form.Item>
          <Form.Item name="description">
            <TextArea placeholder="Описание" />
          </Form.Item>
        </Space>
      </Form>

      <Dragger
        multiple={false}
        accept=".docx,.doc,.pdf"
        customRequest={({ onSuccess }) => onSuccess!('ok')}
        beforeUpload={() => false}
        onChange={onDraggerChange}
        fileList={[]}
      >
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

      <Space justifyContent="end">
        <Button>Создать</Button>
      </Space>
    </Space>
  );
};

export default CreateTemplateModal;
