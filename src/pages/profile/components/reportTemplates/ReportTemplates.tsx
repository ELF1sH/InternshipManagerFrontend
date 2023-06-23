import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';

import { IDiary } from 'domain/entities/diary';
import { GetDiariesListUseCase } from 'domain/useCases/diary/GetDiariesListUseCase';
import { diaryRepository } from 'domain/repositories/api/DiaryRepository';

const { Title } = Typography;

const ReportTemplates: React.FC = () => {
  const [diaries, setDiaries] = useState<IDiary[]>([]);

  const getDiariesUseCase = new GetDiariesListUseCase({
    requestCallback: diaryRepository.getList,
  });

  useEffect(() => {
    getDiariesUseCase.fetch({
      payload: undefined,
      onSuccess: (res) => setDiaries(res),
    });
  }, []);

  return (
    <Space direction="vertical">
      <Title level={3}>Сданные дневники практик</Title>
      <Space gap={20} $wrap>
        {
          diaries.map(({ id, filename, uploadDate }) => (
            <ReportTemplate id={id} key={id} title={filename} turnInDate={uploadDate} />
          ))
        }
      </Space>
    </Space>
  );
};

export default ReportTemplates;
