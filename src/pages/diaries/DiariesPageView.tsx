import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Empty } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { IDiary } from 'domain/entities/diary';

import { EditDiaryForm } from 'pages/diaries/components/EditDiaryForm/EditDiaryForm';
import { useDiariesPageViewModel } from 'pages/diaries/viewModel/context';
import { DiaryFilter } from 'pages/diaries/components/DiaryFilter/DiaryFilter';

const DiariesPageView: React.FC = () => {
  const {
    diaries,
    filtredDiaries: filtredDiariesPromise,
    patchDiary,
  } = useDiariesPageViewModel();

  const { openModal } = useModalViewModel();
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
            filtredDiaries.length <= 0
              ? (
                <Space alignItems="center" justifyContent="center">
                  <Empty />
                </Space>
              )
              : filtredDiaries.map((diary) => (
                <ReportTemplate
                  {...diary}
                  key={diary.id}
                  title={diary.filename}
                  turnInDate={diary.uploadDate}
                  clickEditHandler={(reportTemplate) => {
                    openModal({
                      formTitle: 'Редактирование дневника практики',
                      content: <EditDiaryForm
                        initialValues={{
                          id: diary.id,
                          review: diary.review,
                          status: diary.status,
                        }}
                        editDiaryFormOnFinish={(vals) => patchDiary({ ...vals, id: diary.id })}
                      />,
                      footer: false,
                    });
                  }}
                />
              ))
        }

        </Space>
      </Space>
    </>
  );
};

export default observer(DiariesPageView);
