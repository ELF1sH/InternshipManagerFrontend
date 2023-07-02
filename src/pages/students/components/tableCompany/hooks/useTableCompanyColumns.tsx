import React from 'react';
import { Tooltip } from 'antd';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import AcceptedOffer from 'components/ui/atoms/icons/AcceptedOffer';
import Space from 'components/ui/atoms/space/Space';
import InterviewIcon from 'components/ui/atoms/icons/InterviewIcon';
import OfferIcon from 'components/ui/atoms/icons/OfferIcon';

import { SelectionStatus } from 'domain/entities/selection';

import { useSendStudentVerdictModal } from 'pages/students/modals/sendStudentVerdictModal/useSendStudentVerdictModal';

const getOfferStatusColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'green';
    case SelectionStatus.REJECTED_OFFER:
      return 'red';
    default:
      return 'black';
  }
};

const getVerdictStatusColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.GOT_OFFER:
    case SelectionStatus.ACCEPTED_OFFER:
    case SelectionStatus.REJECTED_OFFER:
      return 'green';
    case SelectionStatus.LOST_OFFER:
      return 'red';
    default:
      return 'black';
  }
};

const getInterviewColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.PASSED_INTERVIEW:
    case SelectionStatus.GOT_OFFER:
    case SelectionStatus.ACCEPTED_OFFER:
    case SelectionStatus.REJECTED_OFFER:
    case SelectionStatus.LOST_OFFER:
      return 'green';
    default:
      return 'black';
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
  const { openSendStudentVerdictModal } = useSendStudentVerdictModal();

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
                <InterviewIcon style={{ transform: 'scale(0.8)', color: getInterviewColor(selectionStatus) }} />
              )}
              size="large"
            />
            <IconButton
              type="ghost"
              icon={(
                <Tooltip placement="left" title={getOfferTooltipTitle(selectionStatus)}>
                  <OfferIcon
                    style={{ color: getVerdictStatusColor(selectionStatus) }}
                  />
                </Tooltip>
              )}
              size="large"
              onClick={() => openSendStudentVerdictModal(selectionId)}
            />
            <IconButton
              type="ghost"
              icon={(
                <Tooltip placement="left" title={getTitle(selectionStatus)}>
                  <AcceptedOffer style={{ color: getOfferStatusColor(selectionStatus) }} />
                </Tooltip>
              )}
              size="large"
            />
          </Space>
      ),
    },
  ];

  return { columns };
};
