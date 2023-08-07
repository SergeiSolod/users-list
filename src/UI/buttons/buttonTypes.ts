import React from 'react';

export interface ButtonProps {
  isDisabledBorder?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  description?: string;
  children?: string;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

export interface IconRoundButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  children?: string;
  label?: string;
  styles?: React.CSSProperties;
}
