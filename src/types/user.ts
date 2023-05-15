export type UserType = {
  id: string;
  email: string;
  phoneNumber: string;
  firstName: string;
  lastName: string;
  isConfirmed: boolean;
  password: string;
  role: string;
  jwt: string;
  specialisation: {
    name: string;
  } | null;
};
