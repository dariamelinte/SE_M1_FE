import cx from 'classnames';
import { useFormikContext } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import { Checkbox, InputField, SelectField } from '@/components/Form';
import { tShirtSizes } from '@/constants/tshirt-sizes';
import arrayToOptions from '@/utils/arrayToOptions';

import styles from './ContestantField.module.css';
import type { BaseFormValues } from './Form.base';

type ContestantFieldProps = {
  isUnique?: boolean;
  name: string;
  index: number;
  onDelete: () => void;
};

export const ContestantField: React.FC<ContestantFieldProps> = ({
  onDelete,
  isUnique,
  index,
  name,
}) => {
  const { handleReset, values, setFieldValue } =
    useFormikContext<BaseFormValues>();

  const tShirtOptions = [
    { name: 'Alegeti o marime de tricou', value: '' },
    ...arrayToOptions(tShirtSizes),
  ];

  return (
    <div className="-w-full py-3">
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.lastName`}
          placeholder="Nume"
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`${name}.firstName`}
          placeholder="Prenume"
          className="mb-2 flex-1"
        />
      </div>
      <div className={styles.inputRow}>
        <InputField
          name={`${name}.phoneNumber`}
          placeholder="Telefon"
          className="mr-2 mb-2 flex-1"
        />
        <InputField
          name={`${name}.email`}
          placeholder="Email"
          className="mb-2 flex-1"
        />
      </div>
      <div className={cx(styles.inputRow, 'items-center')}>
        <SelectField
          options={tShirtOptions}
          name={`${name}.shirtSize`}
          placeholder="Marime tricou"
          className="mr-3 flex-1"
        />
        <Checkbox
          name="isLeader"
          title="Liderul echipei"
          className="flex-1"
          checked={values.leaderIndex === index}
          onCheck={() => setFieldValue('leaderIndex', index)}
        />
      </div>
      <Button
        underlined
        className="pt-2 pb-1"
        type="button"
        onClick={isUnique ? handleReset : onDelete}
      >
        {isUnique ? 'Empty' : 'Delete'}
      </Button>
    </div>
  );
};
