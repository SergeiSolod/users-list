import React, { FC } from 'react';
import { ButtonProps } from './buttonTypes';
import clsx from 'clsx';
import './button.scss';

const Button: FC<ButtonProps> = (props) => {
  const {
    isDisabledBorder = false,
    secondary = false,
    disabled = false,
    description = '',
    children,
    styles = {},
    onClick = () => {},
  } = props;

  return (
    <div style={{ ...styles }} className={'dk-button-fullwidth'}>
      <div className={'dk-button-container'}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={clsx(
            secondary ? 'dk-secondary-button' : 'dk-primary-button',
            disabled ? 'dk-disabled-button' : '',
            isDisabledBorder ? 'dk-not-border-button' : '',
            'dk-button-text-container',
          )}
        >
          <div className={'dk-button-children'}>{children}</div>
        </button>
      </div>
      {description ? <p className={'dk-button-description label'}>{description}</p> : null}
    </div>
  );
};

export default Button;
