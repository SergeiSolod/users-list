import React, { FC } from 'react';
import clsx from 'clsx';
import './button.scss';
import { IconRoundButtonProps } from './buttonTypes';

const IconRoundButton: FC<IconRoundButtonProps> = (props) => {
  const { onClick = () => {}, disabled = false, children, label = '', styles = {} } = props;

  return (
    <div className={'dk-button-column'}>
      <div
        className={clsx('dk-button-container dk-button-container_round', disabled ? '' : 'dk-button-text-container')}
      >
        <button
          onClick={onClick}
          disabled={disabled}
          className={clsx('dk-primary-button', disabled ? 'dk-disabled-button' : '', 'dk-button-round')}
          style={{ ...styles }}
        >
          <div className={'dk-button-icon'}>{children}</div>
        </button>
      </div>

      {label ? <p className={clsx('dk-button-label', disabled ? 'dk-button-label_disabled' : '')}>{label}</p> : null}
    </div>
  );
};

export default IconRoundButton;
