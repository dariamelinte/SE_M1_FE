export type Contestant = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  shirtSize: '' | 'S' | 'M' | 'L' | 'XL' | '2XL' | '3XL';
  isLeader?: boolean;
};

export const API_URL = 'https://fiicode-api.asii.ro';
// export const API_URL = 'http://localhost:1337';

export type BaseContestant = Omit<Contestant, 'isLeader'>;

export type AlgContestant = BaseContestant & {
  csacademy?: string;
  highschool?: string;
  state?: string;
  city?: string;
};
