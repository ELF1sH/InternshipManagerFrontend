export interface IStudent {
  id: number;
  username: string;
  firstname: string;
  patronymic: string;
  lastname: string;
  groupNumber: string;
  studyYear: number,
  company: {
    id: number;
    name: string;
  }
}
