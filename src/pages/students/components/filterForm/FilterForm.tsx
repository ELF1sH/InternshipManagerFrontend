import React from 'react';
import { Form } from 'antd';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { CloseCircleOutlined } from '@ant-design/icons';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import InterviewButton from 'components/ui/molecules/vacancy/components/actions/components/InterviewButton';
import OfferButton from 'components/ui/molecules/vacancy/components/actions/components/OfferButton';
import Space from 'components/ui/atoms/space/Space';
import Input from 'components/ui/atoms/input/Input';
import AcceptOfferButton from 'components/ui/molecules/vacancy/components/actions/components/AcceptOfferButton';

import { StatusLevel } from 'pages/students/helpers/getMaxStatus';
import { useStudentsPageViewModel } from 'pages/students/viewModel/context';

const FilterForm: React.FC = () => {
  const {
    setFullnameSearchString,
    setGroupSearchString,
    setIntershipSearchString,
    statusFilters,
    updateStatusFilters,
  } = useStudentsPageViewModel();

  console.log(toJS(statusFilters));

  return (
    <Form>
      <Space>
        <Space gap={14} $wrap>
          <Form.Item name="student">
            <Input
              placeholder="Студент"
              onChange={(e) => {
                setFullnameSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>
          <Form.Item name="group">
            <Input
              placeholder="Группа"
              onChange={(e) => {
                setGroupSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>

          <Form.Item name="intership">
            <Input
              placeholder="Стажировка"
              onChange={(e) => {
                setIntershipSearchString(e.currentTarget.value);
              }}
            />
          </Form.Item>

          <Space alignItems="center" gap={5} style={{ width: 'fit-content' }}>
            <IconButton
              size="large"
              icon={<CloseCircleOutlined />}
              onClick={() => updateStatusFilters(StatusLevel.NONE)}
              type={statusFilters.includes(StatusLevel.NONE) ? 'primary' : 'default'}
            />
            <InterviewButton
              id={1}
              onClick={() => updateStatusFilters(StatusLevel.INTERVIEW)}
              type={statusFilters.includes(StatusLevel.INTERVIEW) ? 'primary' : 'default'}
            />
            <OfferButton
              onClick={() => updateStatusFilters(StatusLevel.OFFER)}
              type={statusFilters.includes(StatusLevel.OFFER) ? 'primary' : 'default'}
            />
            <AcceptOfferButton
              id={1}
              onClick={() => updateStatusFilters(StatusLevel.GOT)}
              type={statusFilters.includes(StatusLevel.GOT) ? 'primary' : 'default'}
            />
          </Space>
        </Space>

      </Space>

    </Form>
  );
};

export default observer(FilterForm);
