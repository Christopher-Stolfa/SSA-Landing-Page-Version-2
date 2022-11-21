import React, { ReactNode } from 'react';
import styles from './TabPanels.module.scss';

export interface ITabPanels {
  children: ReactNode;
}

const TabPanels = ({ children }: ITabPanels) => <div className={styles['root']}>{children}</div>;

export default TabPanels;
