import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';

import profile from '@/assets/images/icons/profile_picture.png';
import { Button } from '@/components/Buttons';

import styles from './MyAccount.module.css';

// type LoginProps = {};
/* const married = [
  { id: 1, name: 'Married', unavailable: false },
  { id: 2, name: 'Engaged', unavailable: false },
  { id: 3, name: 'Not married', unavailable: true },
] */

const initialValues = {
  firstName: '',
  lastName: '',
  cnp: '',
  birthDate: '',
  sex: '',
  citizenship: '',
  country: '',
  county: '',
  city: '',
  adress: '',
  phoneNumber: '',
  email: '',
  maritalStatus: '',
  children: '',
  emergencyContact: '',
};

export function MyAccount() {
  // const [selectedOption, setSelectedOption] = useState(married[0]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log(values);
      }}
    >
      <Form className="flex h-full w-full flex-col justify-around">
        <div className="flex flex-row items-end justify-between pb-[5px]">
          <div>
            <Image src={profile} width={100} height={100} alt={''}></Image>
          </div>
          <div className="pb-[5px]">
            <Button type="submit">Save</Button>
          </div>
        </div>
        <div className="flex flex-row rounded border-t-[7px] border-blue-500">
          <div className="flex flex-col items-center justify-center bg-blue-100 p-10">
            <div className="pb-5">
              <p className="text-blue-500">First name</p>
              <Field className={styles.input} name="firstName" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Last name</p>
              <Field className={styles.input} name="lastName" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">CNP</p>
              <Field className={styles.input} name="cnp" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Birth date</p>
              <Field className={styles.data} name="birthDate" type="date" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Sex</p>
              <Field className={styles.input} name="sex" type="text" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 p-10">
            <div className="pb-5">
              <p className="text-blue-500">Citizenship</p>
              <Field className={styles.input} name="citizenship" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Country</p>
              <Field className={styles.input} name="country" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">County</p>
              <Field className={styles.input} name="county" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">City</p>
              <Field className={styles.input} name="city" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Complete adress</p>
              <Field className={styles.input} name="adress" type="text" />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-blue-100 p-10">
            <div className="pb-5">
              <p className="text-blue-500">Phone number</p>
              <Field className={styles.input} name="phoneNumber" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Email</p>
              <Field className={styles.input} name="email" type="email" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Marital status</p>
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Children</p>
              <Field className={styles.input} name="children" type="text" />
            </div>
            <div className="pb-5">
              <p className="text-blue-500">Emergency contact</p>
              <Field
                className={styles.input}
                name="emergencyContact"
                type="text"
              />
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
}
