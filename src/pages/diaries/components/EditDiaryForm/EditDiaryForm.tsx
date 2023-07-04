import React from 'react';
import {
  Button,
  Divider,
  Form, Input, Select,
} from 'antd';
import { DefaultOptionType } from 'antd/es/select';

import Space from 'components/ui/atoms/space/Space';

import { IDiaryStatus } from 'domain/entities/diary';
import { PatchDiaryUseCasePayload } from 'domain/useCases/diary/PatchDiarytUseCase';

const diaryStatuses = Object.values(IDiaryStatus);

const getDiaryStatusLabel = (status: IDiaryStatus) => {
  switch (status) {
    case IDiaryStatus.ACCEPTED:
      return 'Принято';

    case IDiaryStatus.PENDING:
      return 'На рассмотрении';

    case IDiaryStatus.REJECTED:
      return 'Отказано';

    default:
      return '';
  }
};

const selectStatusOptions: DefaultOptionType[] = diaryStatuses.map((status) => ({
  value: status,
  label: getDiaryStatusLabel(status),
}));

interface EditDiaryFormProps{
  editDiaryFormOnFinish: (vals: PatchDiaryUseCasePayload) => void,
  initialValues: PatchDiaryUseCasePayload
}

export const EditDiaryForm: React.FC<EditDiaryFormProps> = (
  {
    editDiaryFormOnFinish,
    initialValues,
  },
) => (
  <Form
    layout="vertical"
    onFinish={editDiaryFormOnFinish}
    initialValues={initialValues}
  >
    <Form.Item name="review" label="Комментарий">
      <Input.TextArea
        placeholder="Комментарий:"
      />
    </Form.Item>

    <Form.Item
      style={{ width: '60%' }}
      label="Статус"
      name="status"
    >
      <Select
        placeholder="Статус:"
        options={selectStatusOptions}
      />
    </Form.Item>

    <Divider />
    <Form.Item>
      <Space justifyContent="center">
        <Button type="primary" htmlType="submit">
          Отредактировать дневник практики
        </Button>
      </Space>
    </Form.Item>
  </Form>
);
