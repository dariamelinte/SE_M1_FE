import type { UserType } from '@/types/user';

export const INITIAL_USER: UserType = {
  id: '',
  email: '',
  phoneNumber: '',
  firstName: '',
  lastName: '',
  isConfirmed: false,
  password: '',
  role: '',
  jwt: '',
  specialisation: null,
};
