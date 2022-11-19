import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'cream' | 'cream-invert';
}

const Button = ({ children, variant = 'primary' }: IButtonProps) => (
  <button className={styles[variant]}>{children}</button>
);

export default Button;
