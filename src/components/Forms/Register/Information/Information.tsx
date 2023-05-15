import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import { register } from '@/services/api/register';
import useUserStore from '@/stores/users';
import type { ErrorResponseType } from '@/types/error';
import ERROR_MESSAGES from '@/utils/error-messages';

import { InputField } from '../../Inputs';
import styles from './Information.module.css';

// type LoginProps = {};

export const initialValues = {
  firstName: '',
  lastName: '',
  dateOfBirth: new Date(),
};

const requiredField = 'Required field';

export const validationSchema = yup.object().shape({
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
  const [doctor, setDoctor] = React.useState(false);
  const router = useRouter();
  const { email, phoneNumber, password } = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async ({ firstName, lastName, dateOfBirth }) => {
        try {
          const user = {
            email,
            phoneNumber,
            password,
            firstName,
            lastName,
            dateOfBirth,
            role: doctor ? 'DOCTOR' : 'PATIENT',
          };
          const { data } = await register(user);

          if (data.success) {
            toast.info(data.message);
            setUser(data.user);
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
        <div className="w-full py-5">
          <p className="text-blue-500">Last Name</p>
          <InputField
            className={styles.input}
            name="lastName"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className="w-full pb-5">
          <p className="text-blue-500">First Name</p>
          <InputField
            className={styles.input}
            name="firstName"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="py-5">
          <p className="text-blue-500">Birth Date</p>
          <InputField
            className={styles.data}
            name="dateOfBirth"
            type="date"
            placeholder="Birth Date"
          />
        </div>
        <div className="w-full py-5">
          <label className="text-center">
            <input
              type="checkbox"
              name="doctor"
              checked={doctor}
              onChange={() => setDoctor((prev) => !prev)}
            />{' '}
            I want to be registered as a doctor
          </label>
        </div>
        <div className="w-full py-5">
          <label className="text-center">
            <input
              name="processedData"
              type="checkbox"
              checked={checked}
              onChange={handleChange}
            />{' '}
            I agree to my data being processed
          </label>
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
