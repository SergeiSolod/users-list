import React from 'react';

export interface MessagesProps {
  title?: string;
  message?: string;
  isError?: boolean;
  onAccept?: () => void;
  buttonText?: string;
  styles?: React.CSSProperties;
}
