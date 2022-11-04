import React, { ReactNode } from 'react';
import baseStyles from './Button.scss';

interface Props {
  children?: ReactNode;
}

const Button = ({ children }: Props) => <button className={baseStyles['root']}>{children}</button>;

export default Button;
