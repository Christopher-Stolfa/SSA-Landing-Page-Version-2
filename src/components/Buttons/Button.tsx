import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ children, variant = 'primary' }: Props) => (
  <button className={styles[variant]}>{children}</button>
);

export default Button;
