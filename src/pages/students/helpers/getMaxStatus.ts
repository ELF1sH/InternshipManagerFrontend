import { ISelection, SelectionStatus } from 'domain/entities/selection';

export enum StatusLevel {
  NONE = 'NONE',
  INTERVIEW = 'INTERVIEW',
  OFFER = 'OFFER',
  GOT = 'GOT',
}

export const getMaxStatus = (selections: ISelection[]) => {
  if (!selections.length) return StatusLevel.NONE;

  const statuses = selections.map((s) => s.status);

  if (statuses.includes(SelectionStatus.ACCEPTED_OFFER)
  || statuses.includes(SelectionStatus.REJECTED_OFFER)) return StatusLevel.GOT;

  if (statuses.includes(SelectionStatus.GOT_OFFER)
    || statuses.includes(SelectionStatus.LOST_OFFER)) return StatusLevel.OFFER;

  if (statuses.includes(SelectionStatus.PASSED_INTERVIEW)) return StatusLevel.INTERVIEW;

  return StatusLevel.NONE;
};
