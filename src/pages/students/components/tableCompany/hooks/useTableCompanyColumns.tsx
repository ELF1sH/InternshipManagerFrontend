import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';

export const useTableCompanyColumns = () => {
  const { openModal } = useModalViewModel();

  const columns = [
    {
      title: 'Студент',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Вакансия',
      dataIndex: 'vacancy',
      key: 'vacancy',
    },
    {
      key: 'action',
      title: 'Статус студента',
      render: (_: any, record: any) => (

        <IconButton
          type="ghost"
          icon={<AcceptedOffer />}
          size="large"
          onClick={() => {
            openModal({
              formTitle: 'Отправить студенту вердикт',
              content: (
                <Space direction="vertical" gap={20}>
                  Вы можете отправить студенту оффер или отказ.
                  Студент увидит ваше решение.
                  Если вы отправите оффер, у студента появится
                  возможность принять/отклонить его.
                  <Space direction="horizontal" justifyContent="space-between">
                    <Button
                      onClick={() => {}}
                    >
                      Отправить отказ
                    </Button>

                    <Button
                      type="primary"
                      onClick={() => {}}
                    >
                      Отправить оффер
                    </Button>
                  </Space>
                </Space>),
              footer: false,
            });
          }}
        />
      ),
    },
  ];

  return { columns };
};
