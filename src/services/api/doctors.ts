import type { AxiosPromise } from 'axios';

import { httpService } from '@/services';
import type {
  ConfirmDoctorRequestType,
  ConfirmDoctorResponseType,
  GetDoctorsResponseType,
} from '@/types/admin';

export const getDoctors = (): AxiosPromise<GetDoctorsResponseType> => {
  return httpService.get('/doctors');
};

export const confirmDoctor = (
  data: ConfirmDoctorRequestType
): AxiosPromise<ConfirmDoctorResponseType> => {
  return httpService.put('/doctors', data);
};
