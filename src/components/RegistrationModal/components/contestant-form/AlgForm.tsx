import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';

import { Button } from '@/components/Buttons';
import type { SectionsType } from '@/constants/sections';

import styles from '../../RegistrationModal.module.css';
import type { AlgFormValues, BaseFormValues } from '.';
import { AlgContestantField, INITIAL_ALG_VALUES } from '.';
import { rePhoneNumber } from './Form.base';

type AlgFormProps = {
  selectedSection: SectionsType;
  english?: boolean;
  onClickClose?: () => void;
  onRegister: (
    values: AlgFormValues | BaseFormValues,
    selectedSection: SectionsType
  ) => void;
};

export const AlgForm: React.FC<AlgFormProps> = ({
  onClickClose,
  onRegister,
  selectedSection,
  english,
}) => {
  const requiredField = english ? 'Required Field' : 'Câmp obligatoriu';

  const algValidationSchema = yup.object().shape({
    contestant: yup.object().shape({
      firstName: yup.string().required(requiredField),
      lastName: yup.string().required(requiredField),
      email: yup.string().email('Email invalid').required(requiredField),
      phoneNumber: yup
        .string()
        .matches(rePhoneNumber, 'Numar de telefon invalid')
        .required(requiredField),
      shirtSize: yup.string().required(requiredField),
      csacademy: yup.string().required(requiredField),
      highschool: yup.string().required(requiredField),
      city: yup.string().required(requiredField),
      state: yup.string().required(requiredField),
    }),
  });
  return (
    <Formik<AlgFormValues>
      initialValues={INITIAL_ALG_VALUES}
      validationSchema={algValidationSchema}
      onSubmit={(values) => {
        onRegister(values, selectedSection);
      }}
    >
      {({ isValid }) => (
        <Form>
          <AlgContestantField name="contestant" english={english} />
          <div className={styles.buttonContainer}>
            {!!onClickClose && (
              <Button
                theme="default"
                onClick={onClickClose}
                className="mr-6"
                type="button"
              >
                Cancel
              </Button>
            )}
            <Button theme="web" disabled={!isValid} type="submit">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
