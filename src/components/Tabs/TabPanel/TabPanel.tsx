import React, { ReactNode, useContext } from 'react';
import { TabsContext } from '../../../contexts/TabsContext';
import styles from './TabPanel.module.scss';

export interface ITabPanel {
  id: number;
  children: ReactNode;
}

const TabPanel = ({ id, children }: ITabPanel) => {
  const { activeTab } = useContext(TabsContext);
  const isActive = id === activeTab ? 'active' : 'inactive';

  return (
    <div className={styles[isActive]} role="tabpanel">
      {children}
    </div>
  );
};

export default TabPanel;
