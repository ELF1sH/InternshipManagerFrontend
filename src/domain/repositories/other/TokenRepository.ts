import { ITokenRepository } from 'domain/repositories/other/interfaces/ITokenRepository';
import { BaseLocalStorageRepository } from 'domain/repositories/other/BaseLocalStorageRepository';

export class TokenRepository extends BaseLocalStorageRepository implements ITokenRepository {
  private readonly accessTokenKey = 'access_token';

  private readonly refreshTokenKey = 'refresh_token';

  public setAccessToken = (token: string): void => this.set(this.accessTokenKey, token);

  public getAccessToken = (): string | null => this.get(this.accessTokenKey);

  public removeAccessToken = (): void => this.remove(this.accessTokenKey);

  public setRefreshToken = (token: string): void => this.set(this.refreshTokenKey, token);

  public getRefreshToken = (): string | null => this.get(this.refreshTokenKey);

  public removeRefreshToken = (): void => this.remove(this.refreshTokenKey);
}

export const tokenRepository = new TokenRepository();
