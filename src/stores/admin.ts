import create from 'zustand';

import type { AdminStoreType } from '@/types/store-type';
import { ADMIN_MENU } from '@/utils/admin-menu';

const useAdminStore = create<AdminStoreType>((set, get) => ({
  activeLink: ADMIN_MENU.APPROVE_DOCTORS,

  setActiveLink: (activeLink: string) => set({ activeLink }),
  getActiveLink: () => get().activeLink,
}));

export default useAdminStore;
