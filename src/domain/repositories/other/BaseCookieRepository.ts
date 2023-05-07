import Cookies from 'js-cookie';

export abstract class BaseCookieRepository {
  private readonly path = '/';

  protected get = (key: string) => Cookies.get(key);

  protected set = (key: string, value: string, expDate?: Date | number) => {
    Cookies.set(key, value, {
      path: this.path,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'Lax',
      expires: expDate ?? 1,
    });
  };

  protected remove = (key: string) => Cookies.remove(key, { path: this.path });
}
