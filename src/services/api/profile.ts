import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { Profile } from '@/types/profile';

export const updateProfile = (
  data: Omit<Profile, 'identifier'>,
  accessToken: string
): AxiosPromise<Profile> =>
  httpService.post('/users/profile', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

export const getProfile = (accessToken: string): AxiosPromise<Profile> => {
  console.log({ httpService });
  return httpService.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
