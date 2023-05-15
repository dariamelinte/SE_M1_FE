import type { UserType } from './user';

export type GetDoctorsResponseType = {
  success: boolean;
  message: string;
  data: UserType[];
};

export type ConfirmDoctorRequestType = {
  id: string;
  isAccepted: boolean;
};

export type ConfirmDoctorResponseType = {
  success: boolean;
  message: string;
  account: UserType;
};

export type GetPatientsResponseType = {
  success: boolean;
  message: string;
  data: UserType[];
};
