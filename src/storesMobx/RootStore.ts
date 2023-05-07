import { themeStore, ThemeStore } from 'storesMobx/stores/ThemeStore';

export interface RootStore {
  themeStore: ThemeStore
}

export const initializeStore = (): RootStore => ({
  themeStore,
});
