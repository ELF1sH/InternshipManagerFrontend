import React from 'react';
import { Tooltip } from 'antd';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import Space from 'components/ui/atoms/space/Space';
import Button from 'components/ui/atoms/button/Button';
import InterviewIcon from 'components/ui/atoms/icons/InterviewIcon';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';

import { SelectionStatus } from 'domain/entities/selection';

import { useStudentsPageViewModel } from 'pages/students/viewModel/context';

const getColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'green';
    case SelectionStatus.REJECTED_OFFER:
      return 'red';
    default:
      return '';
  }
};

const getTitle = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'Студент принял оффер';
    case SelectionStatus.REJECTED_OFFER:
      return 'Студент отказался от оффера';
    default:
      return '';
  }
};

const getOfferTooltipTitle = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.GOT_OFFER:
      return 'Оффер отправлен';
    default:
      return '';
  }
};

export const useTableCompanyColumns = () => {
  const { openModal } = useModalViewModel();
  const { patchSelection } = useStudentsPageViewModel();
  const columns = [
    {
      title: 'Студент',
      dataIndex: 'student',
      key: 'student',
    },
    {
      title: 'Вакансия',
      dataIndex: 'vacancy',
      key: 'vacancy',
      render: ({ name, techStack }: {name: string, techStack: string}, record: any) => (

        <>
          <div>{name}</div>
          <div>{techStack}</div>
        </>
      ),
    },
    {
      key: 'action',
      dataIndex: 'action',
      title: 'Статус студента',
      render: ({ selectionStatus, selectionId }:
        {selectionStatus: SelectionStatus, selectionId: number}, record: any) => (
          <Space>

            <IconButton
              type="ghost"
              icon={(
                <InterviewIcon style={{
                  transform: 'scale(0.8)',
                  color: selectionStatus === SelectionStatus.PASSED_INTERVIEW ? 'green' : '',
                }}
                />
                )}
              size="large"
            />

            <IconButton
              type="ghost"
              icon={(
                <Tooltip
                  placement="left"
                  title={getOfferTooltipTitle(selectionStatus)}
                >
                  <OfferIcon
                    style={{
                      color: selectionStatus === SelectionStatus.GOT_OFFER ? 'green' : '',
                    }}
                  />
                </Tooltip>
              )}
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
                          onClick={() => {
                            patchSelection(selectionId, SelectionStatus.LOST_OFFER);
                          }}
                        >
                          Отправить отказ
                        </Button>

                        <Button
                          type="primary"
                          onClick={() => {
                            patchSelection(selectionId, SelectionStatus.GOT_OFFER);
                          }}
                        >
                          Отправить оффер
                        </Button>
                      </Space>
                    </Space>),
                  footer: false,
                });
              }}
            />
            <IconButton
              type="ghost"
              icon={(
                <>
                  <Tooltip placement="left" title={getTitle(selectionStatus)}>
                    <AcceptedOffer style={{
                      color: getColor(selectionStatus),
                    }}
                    />
                  </Tooltip>
                </>
              )}
              size="large"

            />
          </Space>
      ),
    },
  ];

  return { columns };
};
