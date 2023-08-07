import React from 'react';

export interface InputProps {
  id?: string;
  value?: string;
  placeholder?: string;
  description?: string;
  label?: string;
  link?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  isDisabledBorder?: boolean;
  error?: boolean;
  errorMessage?: string;
  styles?: React.CSSProperties;
}
