import React, { ReactNode, useContext } from 'react';
import { TabsContext } from '../../../contexts/TabsContext';

export interface ITabPanel {
  id: number;
  children: ReactNode;
}

const TabPanel = ({ id, children }: ITabPanel) => {
  const { activeTab } = useContext(TabsContext);
  const isActive = id === activeTab;
  return <>{isActive && children}</>;
};

export default TabPanel;
