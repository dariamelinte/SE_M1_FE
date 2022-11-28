import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { GetProfile, Profile } from '@/types/profile';

export const updateProfile = (
  data: any,
  accessToken: string
): AxiosPromise<Profile> => {
  console.log({ accessToken, data });
  return httpService.post('/users/update', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const getProfile = (accessToken: string): AxiosPromise<GetProfile> => {
  console.log({ accessToken });
  return httpService.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
