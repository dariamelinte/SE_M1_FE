import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import { register } from '@/services/api/register';
import useStore from '@/stores/credential';
import type { ErrorResponseType } from '@/types/error';
import ERROR_MESSAGES from '@/utils/error-messages';

import { InputField } from '../../Inputs';
import styles from './Information.module.css';

// type LoginProps = {};

const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: new Date(),
};

const requiredField = 'Câmp obligatoriu';

const validationSchema = yup.object().shape({
  firstName: yup.string().required(requiredField),
  lastName: yup.string().required(requiredField),
  dateOfBirth: yup
    .date()
    .test(
      'dateOfBirth',
      'Varsta trebuie sa fie mai mare de 18 ani.',
      (value, ctx) => {
        const dob = value ? new Date(value) : new Date();
        const validDate = new Date();
        const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
        return !valid ? ctx.createError() : valid;
      }
    )
    .required(requiredField),
});

export function Information() {
  const [checked, setChecked] = React.useState(false);
  const router = useRouter();
  const { email, phoneNumber, password } = useStore(
    (state) => state.credential
  );
  const setCredential = useStore((state) => state.setCredential);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ firstName, lastName, dateOfBirth }) => {
        try {
          const credential = {
            email,
            phoneNumber,
            password,
            firstName,
            lastName,
            dateOfBirth,
          };
          console.log(credential);
          const { data } = await register(credential);

          if (data.success) {
            toast.info(data.message);
            setCredential(data.credential);
            router.push('/login');
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
        <div className="py-5">
          <p className="text-blue-500">Nume de familie</p>
          <InputField
            className={styles.input}
            name="lastName"
            type="text"
            placeholder="Nume de familie"
          />
        </div>
        <div className="pb-5">
          <p className="text-blue-500">Prenume</p>
          <InputField
            className={styles.input}
            name="firstName"
            type="text"
            placeholder="Prenume"
          />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Data de nastere</p>
          <InputField
            className={styles.data}
            name="dateOfBirth"
            type="date"
            placeholder="Data de nastere"
          />
        </div>
        <div className="py-5">
          <p className="text-center">
            <input type="checkbox" checked={checked} onChange={handleChange} />
            &nbsp;I agree to my <br />
            data being processed
          </p>
        </div>
        <div className="pt-5">
          <Button disabled={!checked} type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
