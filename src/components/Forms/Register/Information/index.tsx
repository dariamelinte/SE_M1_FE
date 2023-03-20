import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';

import styles from './Information.module.css';

// type LoginProps = {};

const initialValues = {
  firstName: '',
  lastName: '',
  birthDate: '',
};

export function Information() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form className="flex flex-col items-center">
        <div className="pb-5">
          <p className="text-blue-500">First name</p>
          <Field className={styles.input} name="firstName" type="text" />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Last name</p>
          <Field className={styles.input} name="lastName" type="text" />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Birth date</p>
          <Field className={styles.data} name="birthDate" type="date" />
        </div>
        <div className="pt-5">
          <Button type="submit">Submit information</Button>
        </div>
      </Form>
    </Formik>
  );
}
