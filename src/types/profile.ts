export type Profile = {
  identifier: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shirtSize: 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';
  csacademy?: string;
  institute: string;
  state: string;
  city: string;
  professor?: string;
  sections?: {
    algo?: string;
    ctf?: string;
    web?: string;
    game?: string;
  };
};

export type GetProfile = {
  success: boolean;
  message: string;
  data: Profile;
};

export type PostProfile = {
  success: boolean;
  message: string;
  data: Profile;
};
