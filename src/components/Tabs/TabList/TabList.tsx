import React, { ReactNode } from 'react';
import styles from './TabList.module.scss';

export interface ITabList {
  children: ReactNode;
  className?: string;
}

const TabList = ({ children, className }: ITabList) => (
  <div className={className}>
    <div className={styles['root']} role="tablist">
      {children}
    </div>
  </div>
);

export default TabList;
