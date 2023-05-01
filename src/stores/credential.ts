import create from 'zustand';

import type { CredentialType } from '@/types/credential';
import type { CredentialStoreType } from '@/types/store-type';
import { INITIAL_CREDENTIAL } from '@/utils/initial-values';

const useCredentialStore = create<CredentialStoreType>((set, get) => ({
  credential: INITIAL_CREDENTIAL,

  setCredential: (credential: CredentialType) => set({ credential }),
  getCredential: () => get().credential,
}));

export default useCredentialStore;
