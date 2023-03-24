import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { LoginResponseType } from '@/types/auth';

export const login = (data: any): AxiosPromise<LoginResponseType> => {
  // console.log({ accessToken, data });
  return httpService.post('/login', data);
};
