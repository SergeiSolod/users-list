import React, { FC } from 'react';
import { ModalProps } from './modalTypes';
import Button from '../buttons/Button';
import './modals.scss';

const Modal: FC<ModalProps> = (props) => {
  const {
    subtitle = '',
    title = '',
    message = '',
    buttonTextOk = '',
    buttonTextCancel = '',
    onCancel = () => {},
    onAccept = () => {},
    id = 'dk-modal',
    styles = {},
  } = props;

  return (
    <>
      <div className={'dk-modal-background'} />
      <div className={'dk-modal'} id={id} style={{ ...styles }}>
        {subtitle ? (
          <div className={'dk-modal-subtitle'}>
            <p>{subtitle}</p>
          </div>
        ) : null}

        {title ? (
          <div className={'dk-modal-title'}>
            <h1>{title}</h1>
          </div>
        ) : null}

        {message && (
          <div className={'dk-modal-content'}>
            <p>{message}</p>
          </div>
        )}

        <div className={'dk-modal-buttons'}>
          {buttonTextOk ? (
            <Button onClick={onAccept} styles={{ marginBottom: buttonTextCancel ? 8 : 0 }}>
              {buttonTextOk}
            </Button>
          ) : null}

          {buttonTextCancel ? (
            <Button isDisabledBorder onClick={onCancel}>
              {buttonTextCancel}
            </Button>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Modal;
