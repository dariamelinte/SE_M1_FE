import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { LoginResponseType } from '@/types/auth';

export const register = (data: any): AxiosPromise<LoginResponseType> => {
  console.log(data);
  return httpService.post('/register', data);
};
