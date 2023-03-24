import type { CredentialType } from '@/types/credential';

export type StoreType = {
  credential: CredentialType;
  setCredential: (credential: CredentialType) => void;
  getCredential: () => CredentialType;
};
