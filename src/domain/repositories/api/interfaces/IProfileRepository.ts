import { UserRole } from 'modules/authority/enums/UserRole';

export interface IProfileRepository {
    getProfile: () => Promise<IProfileRespone>;
  }

export interface IProfileRespone {
    id: string;
    username: string;
    firstname: string
    patronymic: string
    lastname: string
    role: UserRole
  }
