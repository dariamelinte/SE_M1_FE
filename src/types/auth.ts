import type { CredentialType } from './credential';

export type AuthType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  success: boolean;
  message: string;
  credential: CredentialType;
};
