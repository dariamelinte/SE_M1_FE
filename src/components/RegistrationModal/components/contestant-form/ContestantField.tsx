import { useFormikContext } from 'formik';
import React from 'react';

import { Button } from '@/components/Buttons';
import { Checkbox, InputField } from '@/components/Form';

import type { ParticipantsFormType } from './Form.base';
import styles from './Form.module.css';

type ContestantFieldProps = {
  isUnique?: boolean;
  name: string;
  index: number;
  isTeamSection: boolean;
  isThemselves: boolean;
  onDelete: () => void;
};

export const ContestantField: React.FC<ContestantFieldProps> = ({
  onDelete,
  isUnique,
  index,
  name,
  isTeamSection,
  isThemselves,
}) => {
  const { handleReset, values, setFieldValue } =
    useFormikContext<ParticipantsFormType>();

  return (
    <div className="-w-full py-3">
      <div className={styles.inputRow}>
        <InputField
          name={`${name}`}
          disabled={isThemselves}
          placeholder="ID Utilizator"
          className="mr-2 mb-2 flex-1"
        />
        {isTeamSection && (
          <Checkbox
            name="isLeader"
            title="Liderul echipei"
            className="flex-1"
            checked={values.leaderIndex === index}
            onCheck={() => setFieldValue('leaderIndex', index)}
          />
        )}
      </div>
      {(!isThemselves || isTeamSection) && (
        <Button
          underlined
          className="pt-2 pb-1"
          type="button"
          onClick={isUnique ? handleReset : onDelete}
        >
          {isUnique ? 'Goleste' : 'Sterge'}
        </Button>
      )}
    </div>
  );
};
