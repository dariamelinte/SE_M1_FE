import * as yup from 'yup';

import type { Profile } from '@/types/profile';

export { Profile };

export const INITIAL_PROFILE: Profile = {
  identifier: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  shirtSize: 'S',
  csacademy: '',
  institute: '',
  city: '',
  state: '',
  professor: '',
};

export const rephone =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

const requiredField = 'Câmp obligatoriu';

export const profileValidationSchema = yup.object().shape({
  firstName: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
  email: yup.string().email('Email invalid').required(requiredField),
  phone: yup
    .string()
    .matches(rephone, 'Numar de telefon invalid')
    .required(requiredField),
  shirtSize: yup.string().required(requiredField),
  csacademy: yup.string(),
  institute: yup.string().required(requiredField),
  city: yup.string().required(requiredField),
  state: yup.string().required(requiredField),
});
