import type { User as OIDCUser } from 'oidc-client-ts';
import type { AuthContextProps } from 'react-oidc-context';

export type UserProfile = {
  email: string;
  family_name: string;
  given_name: string;
};

export type Participant = {
  access_token_type: 'Bearer' | null;
  access_token: string;
  profile: UserProfile | null;
};

export type StoreParticipant = Participant & {
  isAuthenticated: boolean;
  justLoggedOut: boolean;

  loadUser: (user: OIDCUser | null) => void;
  setAccessToken: (access_token: string) => void;
  setUserProfile: (profile: UserProfile | null) => void;

  authenticateUser: (auth: AuthContextProps) => void;
  logoutUser: (auth: AuthContextProps | null) => void;
};
