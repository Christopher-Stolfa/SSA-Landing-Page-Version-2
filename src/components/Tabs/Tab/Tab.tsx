import React, { ReactNode, useContext } from 'react';
import styles from './Tab.module.scss';
import { TabsContext } from '../../../contexts/TabsContext';

export interface ITab {
  id: number;
  children: ReactNode;
}

const Tab = ({ id, children }: ITab) => {
  const { activeTab, setTab } = useContext(TabsContext);

  const isActive = id === activeTab;

  const onClick = () => {
    setTab(id);
  };

  return (
    <button aria-selected={isActive} className={styles['root']} role="tab" onClick={onClick}>
      {children}
    </button>
  );
};

export default Tab;
