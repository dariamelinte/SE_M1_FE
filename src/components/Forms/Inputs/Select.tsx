import cx from 'classnames';
import { getIn, useFormikContext } from 'formik';
import React from 'react';

import styles from './Form.module.css';

export type OptionType = { value: string | number; name: string };

type HTMLSelectProps = JSX.IntrinsicElements['select'];

type SelectProps = HTMLSelectProps & {
  options: OptionType[];
};

type SelectFieldProps = SelectProps & {
  name: string;
  placeholder?: string;
  label?: string;
  className?: string;
  selectClassName?: string;
};

export const Select: React.FC<SelectProps> = ({
  name,
  placeholder,
  className,
  options,
  ...rest
}) => (
  <select
    className={cx(styles.input, className)}
    name={name}
    placeholder={placeholder}
    {...rest}
  >
    {options.map(({ name: optionName, value }) => (
      <option key={value} value={value}>
        {optionName}
      </option>
    ))}
  </select>
);

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  name,
  className,
  selectClassName,
  options,
  onChange,
  onBlur,
  ...rest
}) => {
  const formik = useFormikContext<{ [key: string]: string }>();
  const error = getIn(formik.errors, name);
  const touch = getIn(formik.touched, name);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e);
    } else {
      formik.setFieldValue(name, e.target.value, true);
    }
  };

  const handleFocus = () => {
    formik.setFieldTouched(name);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    if (onBlur) {
      onBlur(e);
    } else {
      formik.handleBlur(e);
    }
  };

  return (
    <div className={className}>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        options={options}
        className={cx(
          {
            [styles['input-error'] as string]: error && touch,
          },
          selectClassName
        )}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};
