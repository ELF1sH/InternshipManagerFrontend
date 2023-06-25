import React from 'react';
import {
  Form, Input, Typography,
} from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

import { IVacancy } from 'domain/entities/vacancy';
import { ICreateOrEditVacancyPayload } from 'domain/repositories/api/interfaces/IVacancyRepository';

export const NewVacancyModal: React.FC<
{
  addOrEditVacancy: (payload: ICreateOrEditVacancyPayload) => void
  defaultValues?: IVacancy,
  buttonText: string
}> = ({ addOrEditVacancy, defaultValues, buttonText }) => {
  const addOrEditNewVacancy = (values: IVacancy) => {
    addOrEditVacancy({ ...values, id: defaultValues?.id || undefined });
  };

  return (
    <Form onFinish={addOrEditNewVacancy} initialValues={defaultValues}>
      <Space gap={14} direction="vertical">
        <Form.Item name="name" style={{ marginTop: '16px' }}>
          <Input placeholder="Название вакансии" />
        </Form.Item>

        <Typography.Paragraph style={{ marginTop: '8px', marginBottom: '0' }}>
          Через запятую перечислите список основных технологий,
          знание которых требуется от студентов
        </Typography.Paragraph>
        <Form.Item name="techStack">
          <Input.TextArea placeholder="Стек технологий" />
        </Form.Item>
        <Typography.Paragraph style={{ marginTop: '8px', marginBottom: '0' }}>
          Укажите количество студентов, которое вы планируете набирать в этом году.
          Эти данные ни к чему не обязывают: они служат лишь примерной оценкой ситуации
          на “рынке труда” для студентов.
        </Typography.Paragraph>
        <Space direction="horizontal" justifyContent="space-between">
          <Form.Item name="minimumQuantity">
            <Input placeholder="Минимальное количество мест" />
          </Form.Item>
          <Form.Item name="maximumQuantity">
            <Input placeholder="Максимальное количество мест" />
          </Form.Item>
        </Space>

        <Form.Item>
          <Space justifyContent="center" paddingBottom={16}>
            <Button type="primary" htmlType="submit">
              {buttonText}
            </Button>
          </Space>

        </Form.Item>

      </Space>
    </Form>
  );
};
