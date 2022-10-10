import { useFormikContext } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import { InputField, SelectField } from '@/components/Form';
import { tShirtSizes } from '@/constants/tshirt-sizes';
import arrayToOptions from '@/utils/arrayToOptions';

import type { AlgFormValues } from '.';
import styles from './ContestantField.module.css';

type AlgContestantFieldProps = {
  name: string;
  english?: boolean;
};

export const AlgContestantField: React.FC<AlgContestantFieldProps> = ({
  name,
  english,
}) => {
  const { handleReset } = useFormikContext<AlgFormValues>();

  const tShirtOptions = [
    {
      name: english ? 'Choose a t-shirt size' : 'Alegeti o marime de tricou',
      value: '',
    },
    ...arrayToOptions(tShirtSizes),
  ];

  return (
    <div className="py-3">
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.lastName`}
          placeholder={english ? 'Last name' : 'Nume'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`${name}.firstName`}
          placeholder={english ? 'First name' : 'Prenume'}
          className="mb-2 flex-1"
        />
      </div>
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.phoneNumber`}
          placeholder={english ? 'Phone number' : 'Telefon'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`${name}.email`}
          placeholder="Email"
          className="mb-2 flex-1"
        />
      </div>
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.csacademy`}
          placeholder="Username CSAcademy"
          className="mr-2 mb-2 flex-1"
        />
        <SelectField
          options={tShirtOptions}
          name={`${name}.shirtSize`}
          placeholder={english ? 'T-shirt size' : 'Marime tricou'}
          className="mb-2 flex-1"
        />
      </div>
      <InputField
        name={`${name}.highschool`}
        placeholder={english ? 'High School/College' : 'Liceu/Facultate'}
        className="mb-2 flex-1"
      />
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.state`}
          placeholder={english ? 'State' : 'Judet'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`${name}.city`}
          placeholder={english ? 'City' : 'Localitate'}
          className="mb-2 flex-1"
        />
      </div>
      <Button underlined className="pt-2 pb-1" onClick={handleReset}>
        Empty
      </Button>
    </div>
  );
};
