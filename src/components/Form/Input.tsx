import cx from 'classnames';
import { Field, getIn, useFormikContext } from 'formik';
import React from 'react';

import styles from './Form.module.css';

type HTMLInputProps = JSX.IntrinsicElements['input'];

type InputFieldProps = HTMLInputProps & {
  name: string;
  placeholder: string;
  label?: string;
  className?: string;
  inputClassName?: string;
};

export const Input: React.FC<HTMLInputProps> = ({ className, ...rest }) => {
  return <input className={cx(styles.input, className)} {...rest} />;
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  className,
  inputClassName,
  onChange,
  onBlur,
  ...rest
}) => {
  const formik = useFormikContext<{ [key: string]: string }>();
  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      formik.setFieldValue(name, e.target.value, true);
    }
  };

  const handleFocus = () => {
    formik.setFieldTouched(name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
    } else {
      formik.handleBlur(e);
    }
  };

  return (
    <div className={className}>
      {label && <label className={styles.label}>{label}</label>}

      <Field
        name={name}
        className={cx(
          styles.input,
          {
            [styles['input-error'] as string]: touch && error,
          },
          inputClassName
        )}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {touch && error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
