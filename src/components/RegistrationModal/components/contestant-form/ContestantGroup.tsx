import { FieldArray, useFormikContext } from 'formik';
import React from 'react';

import { Plus as PlusIcon } from '@/components/icons';

import type { BaseFormValues } from '.';
import { ContestantField, INITIAL_CONTESTANT } from '.';
import styles from './ContestantField.module.css';

type ContestantGroupProps = {};

export const ContestantGroup: React.FC<ContestantGroupProps> = () => {
  const { values, setFieldValue } = useFormikContext<BaseFormValues>();

  return (
    <FieldArray
      name="contestants"
      render={({ remove, push }) => (
        <>
          {values.contestants.map((_, index) => (
            <ContestantField
              key={index}
              index={index}
              name={`contestants[${index}]`}
              isUnique={values.contestants.length === 1}
              onDelete={() => {
                if (values.leaderIndex === index) {
                  setFieldValue('leaderIndex', 0);
                }
                remove(index);
              }}
            />
          ))}

          {values.contestants.length < 3 && (
            <div className={styles.plusButton}>
              <PlusIcon
                className={styles.icon}
                onClick={() => push(INITIAL_CONTESTANT)}
              />
            </div>
          )}
        </>
      )}
    />
  );
};
