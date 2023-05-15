import create from 'zustand';

import type { UserStoreType } from '@/types/store-type';
import type { UserType } from '@/types/user';
import { INITIAL_USER } from '@/utils/initial-values';

const useUserStore = create<UserStoreType>((set, get) => ({
  user: INITIAL_USER,

  setUser: (user: UserType) => set({ user }),
  getUser: () => get().user,
}));

export default useUserStore;
