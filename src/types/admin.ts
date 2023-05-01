import type { CredentialType } from './credential';

export type GetDoctorsResponseType = {
  success: boolean;
  message: string;
  data: CredentialType[];
};

export type ConfirmDoctorRequestType = {
  id: string;
  isAccepted: string;
};

export type ConfirmDoctorResponseType = {
  success: boolean;
  message: string;
  account: CredentialType;
};

export type GetPatientsResponseType = {
  success: boolean;
  message: string;
  data: CredentialType[];
};
