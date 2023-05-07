import { ITokenRepository } from 'domain/repositories/other/interfaces/ITokenRepository';
import { BaseLocalStorageRepository } from 'domain/repositories/other/BaseLocalStorageRepository';

export class TokenRepository extends BaseLocalStorageRepository implements ITokenRepository {
  private readonly accessTokenKey = 'access_token';

  public setAccessToken = (token: string): void => this.set(this.accessTokenKey, token);

  public getAccessToken = (): string | null => this.get(this.accessTokenKey);

  public removeAccessToken = (): void => this.remove(this.accessTokenKey);
}

export const tokenRepository = new TokenRepository();
