import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

export interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return <div className={`${styles['root']} ${className}`}>{children}</div>;
};
