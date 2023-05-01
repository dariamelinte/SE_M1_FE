import type { CredentialType } from '@/types/credential';

export type CredentialStoreType = {
  credential: CredentialType;
  setCredential: (credential: CredentialType) => void;
  getCredential: () => CredentialType;
};

export type AdminStoreType = {
  activeLink: string;
  setActiveLink: (activeLink: string) => void;
  getActiveLink: () => string;
};
