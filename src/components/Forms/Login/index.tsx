import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React from 'react';

import { Button } from '@/components/Buttons';

import styles from './Login.module.css';

// type LoginProps = {};

const initialValues = {
  email: '',
  password: '',
};

export function Login() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col items-center">
        <div className="pb-5">
          <p className="text-blue-500">Email</p>
          <Field className={styles.input} name="email" type="email" />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Password</p>
          <Field className={styles.input} name="password" type="password" />
        </div>
        <div className="py-5">
          <Link href="" className="text-blue-500">
            Forgot password?
          </Link>
        </div>
        <div className="pt-5">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Formik>
  );
}
