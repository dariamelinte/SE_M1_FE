export type Register = {
  id: number;
  leaderId: string;
  members: string[];
};

export type ResponseRegister = {
  success: boolean;
  message: string;
  data: Register;
};
