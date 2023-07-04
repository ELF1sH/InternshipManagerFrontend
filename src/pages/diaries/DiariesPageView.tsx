import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';

import { IDiary } from 'domain/entities/diary';

import { useDiariesPageViewModel } from 'pages/diaries/viewModel/context';
import { DiaryFilter } from 'pages/diaries/components/DiaryFilter/DiaryFilter';

const DiariesPageView: React.FC = () => {
  const {
    diaries,
    filtredDiaries: filtredDiariesPromise,
  } = useDiariesPageViewModel();

  const [filtredDiaries, setFiltredDiaries] = useState<
  IDiary[]
  >(diaries);

  useEffect(() => {
    filtredDiariesPromise.then((val) => {
      setFiltredDiaries(val);
    });
  }, [filtredDiariesPromise]);

  return (
    <>
      <PageHeader header="Сданные дневники практик" />

      <Space direction="vertical" $wrap gap={20}>
        <DiaryFilter />

        <Space gap={20}>
          {
          filtredDiaries.map((diary) => (
            <ReportTemplate
              {...diary}
              key={diary.id}
              title={diary.filename}
              turnInDate={diary.uploadDate}

            />
          ))
        }

        </Space>
      </Space>
    </>
  );
};

export default observer(DiariesPageView);
