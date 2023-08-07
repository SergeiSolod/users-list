import React, { FC } from 'react';
import { MessagesProps } from './messagesTypes';
import Button from '../buttons/Button';
import clsx from 'clsx';
import './messages.scss';

const Messages: FC<MessagesProps> = (props) => {
  const { title = '', message = '', isError = false, onAccept = () => {}, buttonText = 'ok', styles = {} } = props;

  return (
    <>
      <div className={'dk-messages-background'} />
      <div
        className={clsx('dk-messages light-svg', isError ? 'dk-messages_error' : 'dk-messages_success')}
        style={{ ...styles }}
      >
        {isError ? (
          <svg className="item-icon">
            <use xlinkHref="#attention" />
          </svg>
        ) : (
          <svg className="item-icon">
            <use xlinkHref="#checkMark" />
          </svg>
        )}
        <h1 className={'dk-messages-title'} style={{ marginBottom: message ? 0 : 28 }}>
          {title}
        </h1>
        {message ? <p className={'dk-messages-text'}>{message}</p> : null}
        <div className={'dk-messages-button'}>
          <Button onClick={() => onAccept()}>{buttonText}</Button>
        </div>
      </div>
    </>
  );
};

export default Messages;
