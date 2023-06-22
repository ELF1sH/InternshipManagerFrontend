export interface ITokenRepository {
  setAccessToken: (token: string) => void;

  getAccessToken: () => string | null;

  removeAccessToken: () => void;

  setRefreshToken: (token: string) => void;

  getRefreshToken: () => string | null;

  removeRefreshToken: () => void;
}
