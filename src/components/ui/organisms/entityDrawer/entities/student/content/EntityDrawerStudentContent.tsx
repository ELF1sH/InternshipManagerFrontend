import React from 'react';
import { Typography } from 'antd';
import { observer } from 'mobx-react-lite';

import Company from 'components/ui/molecules/company/Company';
import { ProfilePicture } from 'components/ui/organisms/entityDrawer/entities/student/content/styled';
import { type } from 'components/ui/organisms/entityDrawer/entities/student/constants';
import Space from 'components/ui/atoms/space/Space';
import { useEntityDrawerViewModel } from 'components/ui/organisms/entityDrawer/viewModel/context';

import { LONG_DASH } from 'utils/constants/symbols';

const { Text, Title } = Typography;

const EntityDrawerStudentContent: React.FC = () => {
  const {
    getDrawerViewModel,
  } = useEntityDrawerViewModel();

  const vm = getDrawerViewModel(type);

  return (
    <Space direction="vertical" gap={10}>
      <Space gap={20} noShrink>
        <ProfilePicture />
        <Space direction="vertical" gap={5}>
          <Text>
            Группа:
            &nbsp;
            <Text strong>{vm.student?.groupNumber ?? LONG_DASH}</Text>
          </Text>
          <Text>
            Год обучения:
            &nbsp;
            <Text strong>{vm.student?.studyYear ?? LONG_DASH}</Text>
          </Text>
        </Space>
      </Space>

      {
        vm.student?.company
          ? <Company name={vm.student.company.name} />
          : <Text>Без стажировки</Text>
      }
    </Space>
  );
};

export default observer(EntityDrawerStudentContent);
