import { Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import { login } from '@/services/api/login';
import useUserStore from '@/stores/users';
import type { ErrorResponseType } from '@/types/error';
import ERROR_MESSAGES from '@/utils/error-messages';

import { InputField } from '../Inputs';
import styles from './Login.module.css';

const requiredField = 'Required field';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Email invalid').required(requiredField),
  password: yup.string().required(requiredField),
});

export function Login() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const { data } = await login(values);

          if (data.success) {
            toast.info(data.message);
            setUser(data.user);
            router.push(data.user.role === 'ADMIN' ? '/admin' : '/my-account');
          } else {
            throw Error(data.message);
          }
        } catch (err) {
          console.log((err as ErrorResponseType)?.error);
          toast.error(
            (err as ErrorResponseType)?.message || ERROR_MESSAGES.default
          );
        }
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
          <p className="text-blue-500">Password</p>
          <InputField
            className={styles.input}
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="py-1">
          <Link href="/register-credentials" className="text-blue-500">
            Create account
          </Link>
        </div>
        <Link href="/forgot-password" className="text-blue-500">
          Forgot password?
        </Link>
        <div className="pt-5">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}
