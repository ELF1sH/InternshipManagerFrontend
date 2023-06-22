import { UserRoleBackend } from 'modules/authority/enums/UserRole';

export interface IDecodedJWT {
  sub: string;
  role: UserRoleBackend;
  iat: number;
  exp: number;
}
