import type { User as OIDCUser } from 'oidc-client-ts';
import type { AuthContextProps } from 'react-oidc-context';

import type { Profile } from './profile';

export type Participant = {
  access_token_type: 'Bearer' | null;
  access_token: string;
  profile: Profile | null;
};

export type StoreParticipant = Participant & {
  isAuthenticated: boolean;
  justLoggedOut: boolean;
  profileError: number;

  loadUser: (user: OIDCUser | null) => void;

  setProfileError: () => void;
  setAccessToken: (access_token: string) => void;
  setUserProfile: (profile: Profile | null) => void;

  authenticateUser: (auth: AuthContextProps) => void;
  logoutUser: (auth: AuthContextProps | null) => void;
};
