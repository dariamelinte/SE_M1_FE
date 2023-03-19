import { Field, Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';

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
      <Form>
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
}
