import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import { InputField } from '@/components/Forms/Inputs';
import useStore from '@/stores/credential';
import { INITIAL_CREDENTIAL } from '@/utils/initial-values';

import styles from './Credentials.module.css';

// type LoginProps = {};

const initialValues = {
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

const requiredField = 'Câmp obligatoriu';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const validationSchema = yup.object().shape({
  email: yup.string().email('Email invalid').required(requiredField),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, { message: 'Numar de telefon invalid' })
    .required(requiredField),
  password: yup
    .string()
    .matches(passwordRules, {
      message:
        'Introduceti o parola mai puternica (minimum 5 caractere, minim o litera mare, minim o litera mica si minim o cifra).',
    })
    .required(requiredField),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Parolele difera.')
    .required(requiredField),
});

export function Credentials() {
  const router = useRouter();
  const setCredential = useStore((state) => state.setCredential);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ email, phoneNumber, password }) => {
        await setCredential({
          ...INITIAL_CREDENTIAL,
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
          <p className="text-blue-500">Numar de telefon</p>
          <InputField
            className={styles.input}
            name="phoneNumber"
            type="text"
            placeholder="Numar de telefon"
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
            Ai deja cont?
          </Link>
        </div>
        <div className="pt-5">
          <Button type="submit">Create account</Button>
        </div>
      </Form>
    </Formik>
  );
}
