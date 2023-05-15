import type { UserType } from '@/types/user';

export type UserStoreType = {
  user: UserType;
  setUser: (user: UserType) => void;
  getUser: () => UserType;
};

export type AdminStoreType = {
  activeLink: string;
  setActiveLink: (activeLink: string) => void;
  getActiveLink: () => string;
};
