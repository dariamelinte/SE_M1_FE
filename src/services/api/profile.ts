import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { Profile } from '@/types/profile';

export const updateProfile = (
  data: Omit<Profile, 'identifier'>
): AxiosPromise<Profile> =>
  httpService.post('/users/profile', data, {
    withCredentials: true,
  });

export const getProfile = (): AxiosPromise<Profile> => {
  console.log({ httpService });
  return httpService.get('/users/profile', {
    withCredentials: true,
  });
};
