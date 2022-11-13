import React, { ReactNode } from 'react';
import baseStyles from './Container.scss';

export interface ContainerProps {
  children?: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={baseStyles['root']}>{children}</div>;
};
