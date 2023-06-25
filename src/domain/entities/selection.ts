import { IVacancy } from 'domain/entities/vacancy';

enum SelectionStatus {
  NONE = 'NONE',
  SUBMITTED_RESUME = 'SUBMITTED_RESUME',
  PASSED_INTERVIEW = 'PASSED_INTERVIEW',
  GOT_OFFER = 'GOT_OFFER',
  ACCEPTED_OFFER = 'ACCEPTED_OFFER',
  REJECTED_OFFER = 'REJECTED_OFFER',
  LOST_OFFER = 'LOST_OFFER'
}

export interface ISelection {
  id: number
  company: IVacancy
  status: SelectionStatus
}
