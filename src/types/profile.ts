export type Profile = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  shirtSize: 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';
  csacademy?: string;
  institute: string;
  state: string;
  city: string;
  professor?: string;
};
