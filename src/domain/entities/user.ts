export interface IUser {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    patronymic: string;
    role: 'UNVERIFIED_STUDENT' | 'STUDENT' | 'DEAN' | 'COMPANY' | 'ADMIN';
    groupNumber: string
    studyYear?: number;
    companyId?: number;
  }
