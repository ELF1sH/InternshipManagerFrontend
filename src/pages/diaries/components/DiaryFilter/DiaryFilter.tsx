import React from 'react';
import {
  DatePicker,
  Form, Input, Select,
} from 'antd';
import { DefaultOptionType } from 'antd/es/select';
import dayjs from 'dayjs';

import Space from 'components/ui/atoms/space/Space';

import { IDiaryStatus } from 'domain/entities/diary';

import { useDiariesPageViewModel } from 'pages/diaries/viewModel/context';

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

export const DiaryFilter = () => {
  const {
    setCommentSearchString,
    setNameSearchString,
    setSearchStatus,
    setDateSearchRange,
  } = useDiariesPageViewModel();
  return (
    <Form>
      <Space gap={16}>

        <Form.Item>
          <Input
            placeholder="Название файла"
            onChange={(e) => {
              setNameSearchString(e.currentTarget.value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <Input
            placeholder="Комментарий"
            onChange={(e) => {
              setCommentSearchString(e.currentTarget.value);
            }}
          />
        </Form.Item>

        <Form.Item>
          <DatePicker.RangePicker
            bordered={false}
            format="DD/MM/YYYY"
            onChange={(vals) => {
              setDateSearchRange(vals as [dayjs.Dayjs, dayjs.Dayjs]);
            }}
          />
        </Form.Item>

        <Form.Item style={{ width: '17%' }}>
          <Select
            placeholder="Статус"
            options={selectStatusOptions}
            onChange={(value) => {
              setSearchStatus(value);
            }}
            allowClear
          />
        </Form.Item>
      </Space>
    </Form>
  );
};
