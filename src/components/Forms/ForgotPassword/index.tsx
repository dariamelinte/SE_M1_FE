import { Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';

import { InputField } from '../Inputs';
import styles from './ForgotPassword.module.css';

const requiredField = 'Required field';

const initialValues = {
  email: '',
};

const validationSchema = yup.object().shape({
  email: yup.string().email('Email invalid').required(requiredField),
});

export function ForgotPassword() {
  // const router = useRouter();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log(values);
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
        <div className="py-1">
          <Link href="/login" className="text-blue-500">
            Login
          </Link>
        </div>
        <div className="py-1">
          <Link href="/register-credentials" className="text-blue-500">
            Create account
          </Link>
        </div>
        <div className="pt-5">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}
