import { userStore, UserStore } from 'storesMobx/stores/UserStore';
import { themeStore, ThemeStore } from 'storesMobx/stores/ThemeStore';

export interface RootStore {
  themeStore: ThemeStore,
  userStore: UserStore,
}

export const initializeStore = (): RootStore => ({
  themeStore,
  userStore,
});
