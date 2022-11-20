import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cream' | 'cream-invert';
  className?: string;
}

const Button = ({ children, variant = 'primary', className }: IButtonProps) => (
  <button className={`${styles[variant]} ${className}`}>{children}</button>
);

export default Button;
