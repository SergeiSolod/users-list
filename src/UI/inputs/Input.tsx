import React, { FC, useEffect, useState } from 'react';
import './input.scss';
import clsx from 'clsx';
import { InputProps } from './inputTypes';

const Input: FC<InputProps> = (props) => {
  const {
    id = '',
    value = '',
    placeholder = '',
    description = '',
    label = '',
    link = '',
    required = false,
    onChange = () => {},
    onBlur = () => {},
    disabled = false,
    isDisabledBorder = false,
    error = false,
    errorMessage = '',
    styles = {},
  } = props;

  const [update, setUpdate] = useState(false);
  const [inputErrorRequired, setInputErrorRequired] = useState(false);

  useEffect(() => {
    if (update && required && !value && value !== '') {
      setInputErrorRequired(true);
    } else if (update && required && (value || value === '')) {
      setInputErrorRequired(false);
    }
    setUpdate(true);
  }, [value, required]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (required && !value && value !== '') {
      setInputErrorRequired(true);
    } else if (required && (value || value === '')) {
      setInputErrorRequired(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputErrorRequired(false);
    onChange(e);
  };

  return (
    <div
      className={clsx(
        'dk-input-container',
        (error || inputErrorRequired) && !isDisabledBorder ? 'dk-input-error' : '',
        (error || inputErrorRequired) && isDisabledBorder ? 'dk-input-required' : '',
      )}
    >
      <input
        required={required}
        type={'string'}
        disabled={disabled}
        id={id}
        name={id}
        className={clsx(
          'dk-input text',
          disabled ? 'dk-input-disabled' : '',
          isDisabledBorder ? 'dk-input-border-none' : '',
        )}
        value={value ? value : ''}
        data-empty={Boolean(!value) && value !== ''}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={(e) => {
          handleBlur(e);
          onBlur(e);
        }}
        style={styles}
      />

      {label ? (
        <label
          className={clsx(
            'dk-input-label',
            placeholder ? 'dk-input-label-n-placeholder' : '',
            disabled ? 'dk-input-disabled' : '',
            error || inputErrorRequired ? 'dk-input-error' : '',
          )}
          htmlFor={id}
        >
          {label}
          {required ? <span className={'label'}> *</span> : null}
        </label>
      ) : null}
      {description && link ? (
        <a target="_blank" href={link} className={'dk-input-link label'} rel="noreferrer">
          {description}
        </a>
      ) : description && !link ? (
        <p className={'dk-input-description label'}>{description}</p>
      ) : null}

      {error && errorMessage ? <p className={'dk-input-description label'}>{errorMessage}</p> : null}
    </div>
  );
};

export default Input;
