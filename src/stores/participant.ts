import type { User as OIDCUser } from 'oidc-client-ts';
import type { AuthContextProps } from 'react-oidc-context';
import create from 'zustand';

import type { Profile } from '@/components/CompleteProfile/profile-form-base';
import { INITIAL_PROFILE } from '@/components/CompleteProfile/profile-form-base';
import type { StoreParticipant } from '@/types/participantStore';

const useStore = create<StoreParticipant>((set, get) => ({
  access_token_type: 'Bearer',
  access_token: '',
  profile: INITIAL_PROFILE,
  isAuthenticated: false,
  justLoggedOut: false,

  setAccessToken: (access_token: string) => set({ access_token }),
  setUserProfile: (profile: Profile | null) => set({ profile }),

  loadUser: (user: OIDCUser | null) => {
    if (user === null) return;
    set({ access_token: user.access_token });
    const userProfile = user?.profile;
    const profile: Profile = {
      ...INITIAL_PROFILE,
      // TODO:  remove it
      email: userProfile?.email || '',
      lastName: userProfile?.family_name || '',
      firstName: userProfile?.given_name || '',
    };
    set({ profile });
    set({ isAuthenticated: true });
  },

  authenticateUser: async (auth: AuthContextProps) => {
    await auth
      .signinPopup()
      .then((user) => {
        get().loadUser(user);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        get().logoutUser(auth);
      });
  },
  logoutUser: async (auth: AuthContextProps | null) => {
    try {
      if (auth === null) return;
      await auth?.signoutPopup();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      set({ isAuthenticated: false });
      set({ access_token: '' });
      set({
        profile: INITIAL_PROFILE,
      });
      set({ justLoggedOut: true });
    }
  },
}));

export default useStore;
