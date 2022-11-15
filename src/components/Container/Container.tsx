import React, { ReactNode } from 'react';
import styles from './Container.module.scss';

export interface ContainerProps {
  children?: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={styles['root']}>{children}</div>;
};
