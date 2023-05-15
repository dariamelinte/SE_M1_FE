import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import { InputField } from '@/components/Forms/Inputs';
import useUserStore from '@/stores/users';
import { INITIAL_USER } from '@/utils/initial-values';

import styles from './Credentials.module.css';

// type LoginProps = {};

const initialValues = {
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const requiredField = 'Required field';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const validationSchema = yup.object().shape({
  email: yup.string().email('Email invalid').required(requiredField),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, { message: 'Invalid phone number' })
    .required(requiredField),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Introduce a stronger password (minimum 5 characters, a capital letter, a lower size letter and a digit).',
    })
    .required(requiredField),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Parolele difera.')
    .required(requiredField),
});

export function Credentials() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ email, phoneNumber, password }) => {
        await setUser({
          ...INITIAL_USER,
          email,
          phoneNumber,
          password,
        });
        router.push('/register-information');
      }}
    >
      <Form className="flex flex-col items-center">
        <div className="pb-5">
          <p className="text-blue-500">Email</p>
          <InputField
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Phone number</p>
          <InputField
            className={styles.input}
            name="phoneNumber"
            type="text"
            placeholder="Phone number"
          />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Password</p>
          <InputField
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Confirm password</p>
          <InputField
            className={styles.input}
            name="confirmPassword"
            type="password"
            placeholder="Confirma parola"
          />
        </div>
        <div className="py-2">
          <Link href="/login" className="text-blue-500">
            Already have an account?
          </Link>
        </div>
        <div className="pt-5">
          <Button type="submit">Create account</Button>
        </div>
      </Form>
    </Formik>
  );
}
