export interface IStudent {
  id: number;
  username: string;
  firstname: string;
  patronymic: string;
  lastname: string;
  groupNumber: string;
  studyYear: number,
  internshipPlace: {
    id: number;
    name: string;
  }
}

export type AddStudentRequest = Omit<IStudent, 'internshipPlace' | 'studyYear'>
