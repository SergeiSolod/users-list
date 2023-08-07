import React from 'react';

export interface ModalProps {
  subtitle?: string;
  title?: string;
  message?: string;
  buttonTextOk?: string;
  buttonTextCancel?: string;
  onCancel?: () => void;
  onAccept?: () => void;
  id?: string;
  styles?: React.CSSProperties;
}
