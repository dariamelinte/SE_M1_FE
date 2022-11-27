import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { Profile } from '@/types/profile';

export const updateProfile = (data: Profile): AxiosPromise<any> =>
  httpService.post('/profile', data, {
    withCredentials: true,
  });

export const getProfile = (): AxiosPromise<Profile> =>
  httpService.get('/profile', {
    withCredentials: true,
  });
