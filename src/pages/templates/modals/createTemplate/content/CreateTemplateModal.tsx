import React, { useState } from 'react';
import { Form, UploadFile } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { InboxOutlined } from '@ant-design/icons';
import Dragger from 'antd/es/upload/Dragger';
import { useForm } from 'antd/es/form/Form';

import Collapse from 'components/animations/collapse/Collapse';
import Text from 'components/ui/atoms/text/Text';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Button from 'components/ui/atoms/button/Button';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';

import { IPostDiaryTemplatePayload } from 'domain/repositories/api/interfaces/IDiaryTemplateRepository';

import { getYupSync } from 'modules/form/yupSync';

import { validationSchema } from 'pages/templates/modals/createTemplate/content/constants/validationSchema';

export interface ITemplateFormState {
  course: string;
  description: string;
  file: UploadFile | null;
}

interface TemplateFormProps {
  onCreate: (payload: IPostDiaryTemplatePayload) => void;
  formState?: ITemplateFormState;
}

const CreateTemplateModal: React.FC<TemplateFormProps> = ({
  onCreate,
  formState,
}) => {
  const [form] = useForm();
  const { closeModal } = useModalViewModel();

  const yupSync = getYupSync(validationSchema());

  const [files, setFiles] = useState<UploadFile[]>(formState?.file ? [formState.file] : []);

  const onSubmit = () => {
    const values = form.getFieldsValue();

    const file = values.file?.fileList.length ? values.file.fileList[0].originFileObj : null;
    const { course, description } = values;

    onCreate({ file, request: { description, course } });

    closeModal();
  };

  return (
    <Space direction="vertical" gap={16}>
      <Form form={form} onFinish={onSubmit} initialValues={formState} layout="vertical">
        <Space direction="vertical" gap={20}>
          <Form.Item name="course" rules={[yupSync]} label="Номер курса">
            <Input placeholder="3" />
          </Form.Item>
          <Form.Item name="description" rules={[yupSync]} label="Описание">
            <TextArea placeholder="Текст описания" />
          </Form.Item>
          <Space direction="vertical" gap={2}>
            <Form.Item name="file" rules={[yupSync]}>
              <Dragger
                multiple={false}
                accept=".docx,.doc,.pdf"
                customRequest={({ onSuccess }) => onSuccess!('ok')}
                beforeUpload={() => false}
                fileList={files}
                onChange={({ fileList }) => {
                  const lastElement = fileList.at(-1)!;
                  setFiles([lastElement]);
                }}
                onRemove={() => setFiles([])}
                showUploadList={false}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Нажмите или перенесите файл сюда
                </p>
                <p className="ant-upload-hint">
                  Поддерживаемые форматы: .pdf .docx .doc
                </p>
              </Dragger>
            </Form.Item>
            <Collapse isVisible={!!files.length}>
              {
                files.map((file) => (<Text key={file.uid}>{file.name}</Text>))
              }
            </Collapse>
          </Space>
          <Space justifyContent="end">
            <Button htmlType="submit">{formState ? 'Отредактировать' : 'Создать'}</Button>
          </Space>
        </Space>
      </Form>
    </Space>
  );
};

export default CreateTemplateModal;
