import React, { ReactNode } from 'react';
import baseStyles from './Button.scss';

interface Props {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = ({ children, variant = 'primary' }: Props) => (
  <button className={baseStyles[variant]}>{children}</button>
);

export default Button;
