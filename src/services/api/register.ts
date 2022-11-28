import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { Register, ResponseRegister } from '@/types/register';

export const register = (
  data: Register,
  accessToken: string
): AxiosPromise<ResponseRegister> => {
  console.log({ accessToken, data });
  return httpService.post('/teams/register', data, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
