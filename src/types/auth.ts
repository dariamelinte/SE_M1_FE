import type { UserType } from './user';

export type AuthType = {
  email: string;
  password: string;
};

export type LoginResponseType = {
  success: boolean;
  message: string;
  user: UserType;
};
