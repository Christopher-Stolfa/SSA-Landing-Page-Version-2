import React, { ReactNode } from 'react';
import styles from './TabList.module.scss';

export interface ITabList {
  children: ReactNode;
}

const TabList = ({ children }: ITabList) => (
  <div className={styles['root']} role="tablist">
    {children}
  </div>
);

export default TabList;
