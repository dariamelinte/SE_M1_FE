import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';

import styles from './Credentials.module.css';

// type LoginProps = {};

const initialValues = {
  email: '',
  phoneNumber: '',
  password: '',
};

export function Credentials() {
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
          <p className="text-blue-500">Phone number</p>
          <Field className={styles.input} name="phoneNumber" type="text" />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Password</p>
          <Field className={styles.input} name="password" type="password" />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Confirm password</p>
          <Field className={styles.input} name="password" type="password" />
        </div>
        <div className="pt-5">
          <Button type="submit">Create account</Button>
        </div>
      </Form>
    </Formik>
  );
}
