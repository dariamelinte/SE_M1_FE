import * as yup from 'yup';

import type { AlgContestant, BaseContestant } from '@/types/contestant';

export { AlgContestant, BaseContestant };

export interface BaseFormValues {
  contestants: BaseContestant[];
  contestant: AlgContestant;
  leaderIndex: number;
  teamName: string;
}

export interface AlgFormValues {
  contestants: BaseContestant[];
  contestant: AlgContestant;
  leaderIndex: number;
  teamName: '';
}

export const INITIAL_CONTESTANT: BaseContestant = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  shirtSize: '',
};

export const INITIAL_ALG_CONTESTANT: AlgContestant = {
  ...INITIAL_CONTESTANT,
  csacademy: '',
  highschool: '',
  city: '',
  state: '',
};

export const INITIAL_BASE_VALUES: BaseFormValues = {
  contestants: [INITIAL_CONTESTANT],
  contestant: INITIAL_ALG_CONTESTANT,
  leaderIndex: 0,
  teamName: '',
};

export const INITIAL_ALG_VALUES: AlgFormValues = {
  contestants: [INITIAL_CONTESTANT],
  contestant: INITIAL_ALG_CONTESTANT,
  teamName: '',
  leaderIndex: 0,
};

export const rePhoneNumber =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const requiredField = 'Câmp obligatoriu';

export const baseValidationSchema = yup.object().shape({
  teamName: yup.string().required(requiredField),
  contestants: yup.array().of(
    yup.object().shape({
      firstName: yup.string().required(requiredField),
      lastName: yup.string().required(requiredField),
      email: yup.string().email('Email invalid').required(requiredField),
      phoneNumber: yup
        .string()
        .matches(rePhoneNumber, 'Numar de telefon invalid')
        .required(requiredField),
      shirtSize: yup.string().required(requiredField),
      isLeader: yup.boolean(),
    })
  ),
});
