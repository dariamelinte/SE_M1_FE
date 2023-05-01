import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type { GetPatientsResponseType } from '@/types/admin';

export const getPatients = (): AxiosPromise<GetPatientsResponseType> => {
  return httpService.get('/patients');
};
