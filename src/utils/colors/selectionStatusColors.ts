import { SelectionStatus } from 'domain/entities/selection';

export const getOfferStatusColor = (status?: SelectionStatus) => {
  switch (status) {
    case SelectionStatus.ACCEPTED_OFFER:
      return 'green';
    case SelectionStatus.REJECTED_OFFER:
      return 'red';
    default:
      return 'black';
  }
};

export const getVerdictStatusColor = (status?: SelectionStatus) => {
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

export const getInterviewColor = (status?: SelectionStatus) => {
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
