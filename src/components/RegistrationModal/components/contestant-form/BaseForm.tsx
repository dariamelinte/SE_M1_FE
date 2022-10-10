import { Form, Formik } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import { InputField } from '@/components/Form';
import type { SectionsType } from '@/constants/sections';

import styles from '../../RegistrationModal.module.css';
import type { AlgFormValues, BaseFormValues } from '.';
import { baseValidationSchema, ContestantGroup, INITIAL_BASE_VALUES } from '.';

type BaseFormProps = {
  selectedSection: SectionsType;
  onClickClose?: () => void;
  onRegister: (
    values: AlgFormValues | BaseFormValues,
    selectedSection: SectionsType
  ) => void;
};

export const BaseForm: React.FC<BaseFormProps> = ({
  onClickClose,
  onRegister,
  selectedSection,
}) => {
  return (
    <Formik<BaseFormValues>
      initialValues={INITIAL_BASE_VALUES}
      validationSchema={baseValidationSchema}
      onSubmit={(values) => {
        onRegister(values, selectedSection);
      }}
    >
      {({ isValid }) => (
        <Form>
          <InputField
            name={`teamName`}
            placeholder={'Numele echipei'}
            className="flex-1"
          />
          <ContestantGroup />
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
