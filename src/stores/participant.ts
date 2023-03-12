import create from 'zustand';

import type { StoreType } from '@/types/store-type';

const useStore = create<StoreType>(() => ({
  authCredentials: {
    email: '',
    password: '',
  },
}));

export default useStore;
