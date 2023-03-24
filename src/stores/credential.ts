import create from 'zustand';

import type { CredentialType } from '@/types/credential';
import type { StoreType } from '@/types/store-type';
import { INITIAL_CREDENTIAL } from '@/utils/initial-values';

const useStore = create<StoreType>((set, get) => ({
  credential: INITIAL_CREDENTIAL,

  setCredential: (credential: CredentialType) => set({ credential }),
  getCredential: () => get().credential,
}));

export default useStore;
