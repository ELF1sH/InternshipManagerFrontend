import React from 'react';
import {
  Form, Input, Typography,
} from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

import { IVacancy } from 'domain/entities/vacancy';

export const NewVacancyModal: React.FC<
{
  addOrEditVacancy: (payload: any) => void
  defaultValues?: any,
}> = ({ addOrEditVacancy, defaultValues }) => {
  const addOrEditNewVacancy = (values: IVacancy) => {
    addOrEditVacancy({ ...values, id: defaultValues?.id || undefined });
  };
  console.log(defaultValues);
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
          <Form.Item name="minimumQuality">
            <Input placeholder="Минимальное количество мест" />
          </Form.Item>
          <Form.Item name="maximumQuality">
            <Input placeholder="Максимальное количество мест" />
          </Form.Item>
        </Space>

        <Form.Item>
          <Space justifyContent="center" paddingBottom={16}>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Space>

        </Form.Item>

      </Space>
    </Form>
  );
};
