import { useFormikContext } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import { InputField, SelectField } from '@/components/Form';
import { tShirtSizes } from '@/constants/tshirt-sizes';
import type { Profile } from '@/types/profile';
import arrayToOptions from '@/utils/arrayToOptions';

import styles from './Profile.module.css';

type ProfileFieldsProps = {};

export const ProfileFields: React.FC<ProfileFieldsProps> = () => {
  const { handleReset } = useFormikContext<Profile>();

  const tShirtOptions = [
    {
      name: 'Alegeti o marime de tricou',
      value: '',
    },
    ...arrayToOptions(tShirtSizes),
  ];

  return (
    <div className="py-3">
      <div className={styles.inputRow}>
        <InputField
          name={`lastName`}
          placeholder={'Nume de familie'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`firstName`}
          placeholder={'Prenume'}
          className="mb-2 flex-1"
        />
      </div>
      <div className={styles.inputRow}>
        <InputField
          name={`phoneNumber`}
          placeholder={'Telefon'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`email`}
          placeholder="Email"
          disabled
          className="mb-2 flex-1"
        />
      </div>
      <div className={styles.inputRow}>
        <InputField
          name={`csacademy`}
          placeholder="Username CSAcademy"
          className="mr-2 mb-2 flex-1"
        />
        <SelectField
          options={tShirtOptions}
          name={`shirtSize`}
          placeholder={'Marime tricou'}
          className="mb-2 flex-1"
        />
      </div>
      <InputField
        name={`institute`}
        placeholder={'Liceu / Facultate'}
        className="mb-2 flex-1"
      />
      <InputField
        name={`professor`}
        placeholder={'Profesor coordonator'}
        className="mb-2 flex-1"
      />
      <div className={styles.inputRow}>
        <InputField
          name={`state`}
          placeholder={'Judet'}
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`city`}
          placeholder={'Localitate'}
          className="mb-2 flex-1"
        />
      </div>
      <Button underlined className="pt-2 pb-1" onClick={handleReset}>
        Empty
      </Button>
    </div>
  );
};
