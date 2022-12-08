import React, { ReactNode } from 'react';
import styles from './Button.module.scss';

export interface IButtonProps {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
  onClick?: () => void;
  href?: string;
}

const Button = ({ children, variant = 'primary', className, onClick, href }: IButtonProps) => (
  <a
    target="_blank"
    rel="noreferrer"
    href={href}
    onClick={onClick}
    className={`${styles[variant]} ${className}`}>
    {children}
  </a>
);

export default Button;
